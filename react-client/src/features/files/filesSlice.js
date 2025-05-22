import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';
const initialState = {
    items: [],
    loading: false,
    error: null,
};
const url = 'https://localhost:7207';
export const fetchFilesByUserId = createAsyncThunk('files/fetchFilesByUserId', async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${url}/api/User/GetFiles`, {});
        return response.data;
    }
    catch (err) {
        const errorMsg = err.response?.data || err.message.toString() || 'Failed to fetch files';
        return rejectWithValue(errorMsg);
    }
});
export const deleteFile = createAsyncThunk('files/deleteFile', async (fileId, { rejectWithValue }) => {
    try {
        await axiosInstance.delete(`${url}/api/Files/${fileId}`);
        return fileId;
    }
    catch (err) {
        const errorMsg = err.response?.data || err.message || 'Failed to delete file';
        return rejectWithValue(errorMsg);
    }
});
export const updateFile = createAsyncThunk('files/updateFile', async (file, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`${url}/api/Files/${file.id}`, file);
        return response.data;
    }
    catch (err) {
        const errorMsg = err.response?.data || err.message || 'Failed to update file';
        return rejectWithValue(errorMsg);
    }
});
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
            .addCase(fetchFilesByUserId.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
            .addCase(fetchFilesByUserId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? 'Failed to fetch files';
        }).addCase(deleteFile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(deleteFile.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(file => file.id !== action.payload);
        })
            .addCase(deleteFile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? 'Failed to delete file';
        }).addCase(updateFile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateFile.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.items.findIndex(f => f.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        })
            .addCase(updateFile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? 'Failed to update file';
        });
    },
});
export const { clearFiles } = filesSlice.actions;
export default filesSlice.reducer;
