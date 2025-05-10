// src/store/accessSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';

export interface AccessState {
  fileBlob?: Blob;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | object | null;
}

const initialState: AccessState = {
  status: 'idle',
  error: null,
};

export const accessSharedFile = createAsyncThunk(
  'access/accessSharedFile',
  async (code: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<Blob>(
        `/api/Share/access`,
        JSON.stringify(code),
        {
          headers: { 'Content-Type': 'application/json' },
          responseType: 'blob',
        }
      );
      return response.data;
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
        state.fileBlob = action.payload;
      })
      .addCase(accessSharedFile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearAccess } = accessSlice.actions;
export default accessSlice.reducer;
