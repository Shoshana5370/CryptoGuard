// src/features/files/filesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store/store'; // adjust path as needed
import { FileDto } from '../../types/FileDto';

interface FilesState {
    items: FileDto[];
    loading: boolean;
    error: string | null;
}
const initialState: FilesState = {
    items: [],
    loading: false,
    error: null,
};

// Thunk to fetch files by user ID
export const fetchFilesByUserId = createAsyncThunk<
    FileDto[],     
    number,         
    { rejectValue: string, state: RootState } // Extra options
>(
    'files/fetchFilesByUserId',
    async (userId, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.get<FileDto[]>(`/api/files/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
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
                state.error = action.payload || 'Failed to fetch files';
            });
    },
});

export const { clearFiles } = filesSlice.actions;
export default filesSlice.reducer;
