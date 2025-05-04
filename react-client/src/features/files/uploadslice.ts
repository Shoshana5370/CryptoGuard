// src/features/files/uploadSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store'; // Adjust path
import { FilePostModel } from '../../types/FilePostModel'; // Adjust path
import axiosInstance from '../../axiosInstance';

interface UploadState {
    uploading: boolean;
    success: boolean;
    error: string | null;
    uploadedFile?: FilePostModel;
}

const initialState: UploadState = {
    uploading: false,
    success: false,
    error: null,
};
const url = 'https://localhost:7207'
export const uploadFileContent = createAsyncThunk<
    string,               // Return s3Key
    File,                 // Argument: file
    { rejectValue: string, state: RootState }
>(
    'upload/uploadFileContent',
    async (file, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await axiosInstance.post<{ s3Key: string }>(`${url}/api/Files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data.s3Key;
        } catch (err: any) {
            const msg = err.response?.data || err.message || 'File upload failed';
            return rejectWithValue(msg);
        }
    }
);
export const postFileMetadata = createAsyncThunk<
    FilePostModel,       // Return type
    FilePostModel,       // Argument type
    { rejectValue: string, state: RootState }>(
    'upload/postFileMetadata',
    async (metadata, { rejectWithValue }) => {
        try {
            
            const response = await axiosInstance.post<FilePostModel>('/api/Files/', metadata);
            return response.data;
        } catch (err: any) {
            const msg = err.response?.data || err.message || 'Metadata post failed';
            return rejectWithValue(msg);
        }
    }
);

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
        // Upload file content
        builder
            .addCase(uploadFileContent.pending, (state) => {
                state.uploading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(uploadFileContent.fulfilled, (state) => {
                state.uploading = false;
            })
            .addCase(uploadFileContent.rejected, (state, action) => {
                state.uploading = false;
                state.error = action.payload || 'File upload failed';
            });

        // Post metadata
        builder
            .addCase(postFileMetadata.pending, (state) => {
                state.uploading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(postFileMetadata.fulfilled, (state, action: PayloadAction<FilePostModel>) => {
                state.uploading = false;
                state.success = true;
                state.uploadedFile = action.payload;
            })
            .addCase(postFileMetadata.rejected, (state, action) => {
                state.uploading = false;
                state.error = action.payload || 'Metadata post failed';
            });
    },
});

export const { resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;
