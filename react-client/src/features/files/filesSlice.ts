// src/features/files/filesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store'; // adjust path as needed
import { FileDto } from '../../types/FileDto';
import axiosInstance from '../../axiosInstance';

export interface FilesState {
    items: FileDto[];
    loading: boolean;
    error: string | object | null;
}
const initialState: FilesState = {
    items: [],
    loading: false,
    error: null,
};
const url = 'https://localhost:7207'

// Thunk to fetch files by user ID
export const fetchFilesByUserId = createAsyncThunk<
    FileDto[],     
    number,         
    { rejectValue: string, state: RootState } // Extra options
>(
    'files/fetchFilesByUserId',
    async (userId, {  rejectWithValue }) => {
        try {
            const response = await axiosInstance.get<FileDto[]>(`${url}/api/User/${userId}`, {
            });
            return response.data;
        } catch (err: any) {
            const errorMsg = err.response?.data || err.message || 'Failed to fetch files';
            return rejectWithValue(errorMsg);
        }
    }
);

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        clearFiles: (state) => {
            state.items = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilesByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilesByUserId.fulfilled, (state, action: PayloadAction<FileDto[]>) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchFilesByUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? 'Failed to fetch files';
            });
    },
});

export const { clearFiles } = filesSlice.actions;
export default filesSlice.reducer;
