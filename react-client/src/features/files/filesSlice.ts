import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FileDto } from '../../types/FileDto';
import { FilePostModel } from '../../types/FilePostModel';
import { RootState } from '../../store/store';
import axiosInstance from '../../axiosInstance';
import { hashFileSHA256 } from "../../styles/lib/utils";

export interface FilesState {
    items: FileDto[];
    isFetching: boolean;
    hasFetched: boolean;
    fetchError: string | null;
    isDeletingById: { [fileId: number]: boolean };
    deleteErrorById: { [fileId: number]: string | null };
    isUpdating: boolean;
    updateError: string | null;
    uploading: boolean;
    uploadError: string | null,
    progress: number,
    uploadedFile: FilePostModel | undefined,
}

const initialState: FilesState = {
    items: [],
    isFetching: false,
    hasFetched: false,
    fetchError: null,
    isDeletingById: {},
    deleteErrorById: {},
    isUpdating: false,
    updateError: null,
    uploading: false,
    uploadError: null,
    progress: 0,
    uploadedFile: undefined,

};

// --- FETCH FILES ---
export const fetchFilesByUserId = createAsyncThunk<FileDto[]>(
    'files/fetchFilesByUserId',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get<FileDto[]>('/api/User/GetFiles');
            return response.data;
        } catch (err: any) {
            const errorMsg = err.response?.data?.toString() || err.message || 'Failed to fetch files';
            return rejectWithValue(errorMsg);
        }
    }
);

// --- DELETE FILE ---
export const deleteFile = createAsyncThunk<number, number>(
    'files/deleteFile',
    async (fileId, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/api/Files/${fileId}`);
            return fileId;
        } catch (err: any) {
            const errorMsg = err.response?.data?.toString() || err.message || 'Failed to delete file';
            return rejectWithValue(errorMsg);
        }
    }
);

// --- UPDATE FILE ---
export const updateFile = createAsyncThunk<FileDto, FileDto>(
    'files/updateFile',
    async (file, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put<FileDto>(`/api/Files/${file.id}`, file);
            return response.data;
        } catch (err: any) {
            const errorMsg = err.response?.data?.toString() || err.message || 'Failed to update file';
            return rejectWithValue(errorMsg);
        }
    }
);

// --- UPLOAD FILE ---
export const uploadFileContent = createAsyncThunk<
    FileDto,
    { file: File; fileName?: string },
    { rejectValue: string; state: RootState }
>(
    'files/uploadFileContent',
    async ({ file, fileName }, { rejectWithValue, dispatch }) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const originalHash = await hashFileSHA256(file);
            formData.append('originalHash', originalHash);
            if (fileName) {
                formData.append('customFileName', fileName);
            }

            const response = await axiosInstance.post<FileDto>(
                `/api/Files/upload`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (progressEvent) => {
                        const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                        dispatch(setProgress(percent));
                    },
                }
            );
            return response.data;
        } catch (err: any) {
            const msg = err.response?.data || err.message || 'File upload failed';
            return rejectWithValue(msg);
        }
    }
);

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        clearFiles(state) {
            state.items = [];
            state.fetchError = null;
            
        },
        resetUploadState(state) {
            state.uploading = false;
            state.uploadError = null;
            state.uploadedFile = undefined;
            state.progress = 0;
        },
        setProgress(state, action: PayloadAction<number>) {
            state.progress = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // --- Fetch files ---
            .addCase(fetchFilesByUserId.pending, (state) => {
                state.isFetching = true;
                state.fetchError = null;
            })
            .addCase(fetchFilesByUserId.fulfilled, (state, action: PayloadAction<FileDto[]>) => {
                state.isFetching = false;
                state.items = action.payload;
                state.hasFetched = true;
            })
            .addCase(fetchFilesByUserId.rejected, (state, action) => {
                state.isFetching = false;
                state.fetchError = action.payload as string;
                state.hasFetched = false;
            })
            // --- Delete file ---
            .addCase(deleteFile.pending, (state, action) => {
                const id = action.meta.arg;
                state.isDeletingById[id] = true;
                state.deleteErrorById[id] = null;
            })
            .addCase(deleteFile.fulfilled, (state, action: PayloadAction<number>) => {
                const id = action.payload;
                state.isDeletingById[id] = false;
                delete state.deleteErrorById[id];
                state.items = state.items.filter(file => file.id !== id);
            })
            .addCase(deleteFile.rejected, (state, action) => {
                const id = action.meta.arg;
                state.isDeletingById[id] = false;
                state.deleteErrorById[id] = action.payload as string;
            })
            .addCase(updateFile.pending, (state) => {
                state.isUpdating = true;
                state.updateError = null;
            })
            .addCase(updateFile.fulfilled, (state, action: PayloadAction<FileDto>) => {
                state.isUpdating = false;
                state.updateError = null;
                const updatedFile = action.payload;
                const index = state.items.findIndex(f => f.id === updatedFile.id);
                if (index !== -1) {
                    state.items[index] = updatedFile;
                }
            })
            .addCase(updateFile.rejected, (state, action) => {
                state.isUpdating = false;
                state.updateError = action.payload as string;
            })


            // --- Upload file ---
            .addCase(uploadFileContent.pending, (state) => {
                state.uploading = true;
                state.uploadError = null;
                state.progress = 0;
            })
            .addCase(uploadFileContent.fulfilled, (state, action: PayloadAction<FileDto>) => {
                state.uploading = false;
                state.uploadError = null;
                state.progress = 100;
                state.uploadedFile = action.payload;
                state.items.unshift(action.payload);
            })
            .addCase(uploadFileContent.rejected, (state, action) => {
                state.uploading = false;
                state.uploadError = action.payload ?? 'Failed to upload file';
                state.progress = 0;
                state.uploadedFile = undefined;
            });
    },
});
export const { clearFiles, resetUploadState, setProgress } = filesSlice.actions;
export default filesSlice.reducer;
