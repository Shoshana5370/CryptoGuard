// src/features/files/uploadSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store'; // Adjust path
import { FilePostModel } from '../../types/FilePostModel'; // Adjust path
import axiosInstance from '../../axiosInstance';

export interface UploadState {
    uploading: boolean;
    success: boolean;
    error: string | object | null;
    uploadedFile?: FilePostModel;
}

const initialState: UploadState = {
    uploading: false,
    success: false,
    error: null,
};
export const uploadFileContent = createAsyncThunk<
    FilePostModel,                         // Return type (from your .NET controller)
    { file: File },                        // Arg type (no userId)
    { rejectValue: string, state: RootState }
>(
    'upload/uploadFileContent',
    async ({ file }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axiosInstance.post<FilePostModel>(
                `/api/Files/upload`,   // 🔥 no userId in query string
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log(response.data); // Debugging
            return response.data;
        } catch (err: any) {
            const msg = err.response?.data || err.message || 'File upload failed';
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
        builder
            .addCase(uploadFileContent.pending, (state) => {
                state.uploading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(uploadFileContent.fulfilled, (state, action: PayloadAction<FilePostModel>) => {
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
