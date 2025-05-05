// src/store/shareSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';
import { SharePostModel } from '../../types/SharePostModel';
import { ShareDto } from '../../types/ShareDto';




interface ShareState {
  share?: ShareDto;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | object | null;
}

const initialState: ShareState = {
  status: 'idle',
  error: null,
};

export const shareFile = createAsyncThunk(
  'share/shareFile',
  async (shareData: SharePostModel, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<ShareDto>(`/api/Share`, shareData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Error sharing file');
    }
  }
);

const shareSlice = createSlice({
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
        state.error = action.payload as string;
      });
  },
});

export const { clearShare } = shareSlice.actions;
export default shareSlice.reducer;
