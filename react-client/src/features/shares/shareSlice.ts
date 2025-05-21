import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { ShareDto } from '../../types/ShareDto';
import axiosInstance from '../../axiosInstance';

export interface ShareState {
  sharesWithMe: ShareDto[];
  sharesToOthers: ShareDto[];
  loading: boolean;
  error: string | object | null;
}

const initialState: ShareState = {
  sharesWithMe: [],
  sharesToOthers: [],
  loading: false,
  error: null,
};

const apiBase = 'https://localhost:7207';

export const fetchSharesWithMe = createAsyncThunk<
  ShareDto[],
  void,
  { state: RootState; rejectValue: string }
>('shares/fetchSharesWithMe', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get<ShareDto[]>(`${apiBase}/api/User/GetSharesWithMe`);
    return response.data;
  } catch (err: any) {
    const msg = err.response?.data || err.message || 'Failed to fetch shares with me';
    return thunkAPI.rejectWithValue(msg);
  }
});

export const fetchSharesToOthers = createAsyncThunk<
  ShareDto[],
  void,
  { state: RootState; rejectValue: string }
>('shares/fetchSharesToOthers', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get<ShareDto[]>(`${apiBase}/api/User/GetSharesToOthers`);
    return response.data;
  } catch (err: any) {
    const msg = err.response?.data || err.message || 'Failed to fetch shares to others';
    return thunkAPI.rejectWithValue(msg);
  }
});
export const extendShareExpiration = createAsyncThunk(
  "shares/extendExpiration",

  async ({ id, newDate }: { id: number; newDate: string }, thunkAPI) => {

      try {
        await axiosInstance.post(`${apiBase}/api/Share/${id}`, { newDate });
      } catch (err: any) {
        const msg = err.response?.data || err.message || 'Failed to extend expiration';
        return thunkAPI.rejectWithValue(msg);
      }
    }
  );
const sharesSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    clearShares: (state) => {
      state.sharesWithMe = [];
      state.sharesToOthers = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSharesWithMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSharesWithMe.fulfilled, (state, action: PayloadAction<ShareDto[]>) => {
        state.loading = false;
        state.sharesWithMe = action.payload;
      })
      .addCase(fetchSharesWithMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch shares with me';
      })
  
      .addCase(fetchSharesToOthers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSharesToOthers.fulfilled, (state, action: PayloadAction<ShareDto[]>) => {
        state.loading = false;
        state.sharesToOthers = action.payload;
      })
      .addCase(fetchSharesToOthers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch shares to others';
      })
  
      .addCase(extendShareExpiration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(extendShareExpiration.fulfilled, (state, action) => {
        state.loading = false;
        const { id, newDate } = action.meta.arg;
        const share = state.sharesToOthers.find((s) => s.id === id);
        if (share) {
          share.expiresAt = newDate;
        }
      })
      .addCase(extendShareExpiration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to extend expiration date';
      });
  }
  },
);
export const { clearShares } = sharesSlice.actions;
export default sharesSlice.reducer;
