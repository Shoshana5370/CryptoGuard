// src/store/shareSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';

export interface SharePostModel {
  fileId: number;
  recipientEmail: string;
  expiresAt?: string;  // optional, adjust as needed
}

export interface Share {
  id: number;
  recipientEmail: string;
  accessCode: string;
  expiresAt: string;
}

interface ShareState {
  share?: Share;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ShareState = {
  status: 'idle',
};
const url = 'https://localhost:7207'

export const shareFile = createAsyncThunk(
  'share/shareFile',
  async (shareData: SharePostModel, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<Share>(`${url}/api/Share`, shareData);
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
      state.error = undefined;
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
