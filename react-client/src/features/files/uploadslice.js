import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';
const initialState = {
    uploading: false,
    success: false,
    error: null,
};
import { hashFileSHA256 } from "../../styles/lib/utils";
export const uploadFileContent = createAsyncThunk('upload/uploadFileContent', async ({ file, fileName }, { rejectWithValue }) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const originalHash = await hashFileSHA256(file);
        formData.append('originalHash', originalHash);
        if (fileName) {
            formData.append('customFileName', fileName);
        }
        const response = await axiosInstance.post(`/api/Files/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        const msg = err.response?.data || err.message || 'File upload failed';
        return rejectWithValue(msg);
    }
});
const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        resetUploadState: (state) => {
            state.uploading = false;
            state.success = false;
            state.error = null;
            state.uploadedFile = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadFileContent.pending, (state) => {
            state.uploading = true;
            state.success = false;
            state.error = null;
        })
            .addCase(uploadFileContent.fulfilled, (state, action) => {
            state.uploading = false;
            state.success = true;
            state.uploadedFile = action.payload;
        })
            .addCase(uploadFileContent.rejected, (state, action) => {
            state.uploading = false;
            state.error = action.payload ?? 'Failed to fetch files';
        });
    },
});
export const { resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;
