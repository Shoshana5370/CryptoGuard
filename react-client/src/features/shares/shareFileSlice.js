import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';
const initialState = {
    status: 'idle',
    error: null,
};
export const shareFile = createAsyncThunk('share/shareFile', async (shareData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/api/Share`, shareData);
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err.response?.data || 'Error sharing file');
    }
});
const shareFileSlice = createSlice({
    name: 'share',
    initialState,
    reducers: {
        clearShare(state) {
            state.share = undefined;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(shareFile.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(shareFile.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.share = action.payload;
        })
            .addCase(shareFile.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});
export const { clearShare } = shareFileSlice.actions;
export default shareFileSlice.reducer;
