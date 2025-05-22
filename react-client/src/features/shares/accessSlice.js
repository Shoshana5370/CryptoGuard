import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/axiosInstance';
const initialState = {
    fileBlob: undefined,
    fileName: undefined,
    status: 'idle',
    error: null,
};
export const accessSharedFile = createAsyncThunk('access/accessSharedFile', async ({ shareId, code }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/api/Share/access`, { code, id: shareId }, { headers: { 'Content-Type': 'application/json' } });
        const { file, fileName, contentType, originalHash } = response.data;
        const binary = atob(file);
        const byteArray = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            byteArray[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: contentType });
        const hashBuffer = await crypto.subtle.digest('SHA-256', byteArray);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        if (hashHex !== originalHash.toLowerCase()) {
            throw new Error("File hash verification failed on client");
        }
        return { blob, filename: fileName };
    }
    catch (err) {
        return rejectWithValue(err.message || 'Error accessing shared file');
    }
});
const accessSlice = createSlice({
    name: 'access',
    initialState,
    reducers: {
        clearAccess(state) {
            state.fileBlob = undefined;
            state.fileName = undefined;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(accessSharedFile.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(accessSharedFile.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.fileBlob = action.payload.blob;
            state.fileName = action.payload.filename;
        })
            .addCase(accessSharedFile.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || 'Unknown error';
        });
    },
});
export const { clearAccess } = accessSlice.actions;
export default accessSlice.reducer;
