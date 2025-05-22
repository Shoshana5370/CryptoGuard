

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '@/axiosInstance';

export interface AccessState {
  fileBlob?: Blob;
  fileName?: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | object | null;
}

const initialState: AccessState = {
  fileBlob: undefined,
  fileName: undefined,
  status: 'idle',
  error: null,
};

export const accessSharedFile = createAsyncThunk(
  'access/accessSharedFile',
  async ({ shareId, code }: { shareId: number; code: string }, { rejectWithValue })=> {
    try {
      const response = await axiosInstance.post<Blob>(
        `/api/Share/access`,
        { code, id: shareId },
        { headers: { 'Content-Type': 'application/json' }, responseType: 'blob' }
      );

      // Extract filename from Content-Disposition header
      const disposition = response.headers['content-disposition'];
      let filename = 'shared-file';

      if (disposition && disposition.includes('filename=')) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) {
          filename = match[1];
        }
      }

      return { blob: response.data, filename };
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Error accessing shared file');
    }
  }
);

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
      .addCase(accessSharedFile.fulfilled, (state, action: PayloadAction<{ blob: Blob; filename: string }>) => {
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
