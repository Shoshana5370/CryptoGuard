import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { ShareDto } from '@/types/ShareDto';
import { SharePostModel } from '@/types/SharePostModel';
import axiosInstance from '@/axiosInstance';
export interface ShareState {
  currentFile?: {
    blob: Blob;
    name: string;
  };
  createdShare?: ShareDto;
  sharesWithMe: ShareDto[];
  sharesToOthers: ShareDto[];
  status: {
    access: 'idle' | 'loading' | 'succeeded' | 'failed';
    share: 'idle' | 'loading' | 'succeeded' | 'failed';
    fetchWithMe: 'idle' | 'loading' | 'succeeded' | 'failed';
    fetchToOthers: 'idle' | 'loading' | 'succeeded' | 'failed';
    extend: 'idle' | 'loading' | 'succeeded' | 'failed';
  };
  error: {
    access?: string;
    share?: string;
    fetchWithMe?: string;
    fetchToOthers?: string;
    extend?: string;
  };
}

const initialState: ShareState = {
  currentFile: undefined,
  createdShare: undefined,
  sharesWithMe: [],
  sharesToOthers: [],
  status: {
    access: 'idle',
    share: 'idle',
    fetchWithMe: 'idle',
    fetchToOthers: 'idle',
    extend: 'idle',
  },
  error: {},
};

export const accessSharedFile = createAsyncThunk(
  'share/accessSharedFile',
  async ({ shareId, code }: { shareId: number; code: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/Share/access`, { code, id: shareId });
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
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error accessing shared file');
    }
  }
);

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

export const fetchSharesWithMe = createAsyncThunk<ShareDto[], void, { state: RootState; rejectValue: string }>(
  'share/fetchSharesWithMe',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get<ShareDto[]>(`/api/User/GetSharesWithMe`);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message || 'Failed to fetch shares with me');
    }
  }
);

export const fetchSharesToOthers = createAsyncThunk<ShareDto[], void, { state: RootState; rejectValue: string }>(
  'share/fetchSharesToOthers',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get<ShareDto[]>(`/api/User/GetSharesToOthers`);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message || 'Failed to fetch shares to others');
    }
  }
);

export const extendShareExpiration = createAsyncThunk<
  void,
  { id: number; newDate: string },
  { state: RootState; rejectValue: string }
>('share/extendExpiration', async ({ id, newDate }, thunkAPI) => {
  try {
    await axiosInstance.post(`/api/Share/${id}`, { newDate });
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message.toString() || 'Failed to extend expiration');
  }
});

const shareSlice = createSlice({
  name: 'share',
  initialState,
  reducers: {
    clearAccess(state) {
      state.currentFile = undefined;
      state.status.access = 'idle';
      delete state.error.access;
    },
    clearShare(state) {
      state.createdShare = undefined;
      state.status.share = 'idle';
      delete state.error.share;
    },
    clearShares(state) {
      state.sharesWithMe = [];
      state.sharesToOthers = [];
      state.status.fetchWithMe = 'idle';
      state.status.fetchToOthers = 'idle';
      state.status.extend = 'idle';
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(accessSharedFile.pending, (state) => {
        state.status.access = 'loading';
      })
      .addCase(accessSharedFile.fulfilled, (state, action: PayloadAction<{ blob: Blob; filename: string }>) => {
        state.status.access = 'succeeded';
        state.currentFile = { blob: action.payload.blob, name: action.payload.filename };
      })
      .addCase(accessSharedFile.rejected, (state, action) => {
        state.status.access = 'failed';
        state.error.access = action.payload as string;
      })
      .addCase(shareFile.pending, (state) => {
        state.status.share = 'loading';
      })
      .addCase(shareFile.fulfilled, (state, action: PayloadAction<ShareDto>) => {
        state.status.share = 'succeeded';
        state.createdShare = action.payload;
    
      })
      .addCase(shareFile.rejected, (state, action) => {
        state.status.share = 'failed';
        state.error.share = action.payload as string;
      })

      .addCase(fetchSharesWithMe.pending, (state) => {
        state.status.fetchWithMe = 'loading';
      })
      .addCase(fetchSharesWithMe.fulfilled, (state, action: PayloadAction<ShareDto[]>) => {
        state.status.fetchWithMe = 'succeeded';
        state.sharesWithMe = action.payload;
      })
      .addCase(fetchSharesWithMe.rejected, (state, action) => {
        state.status.fetchWithMe = 'failed';
        state.error.fetchWithMe = action.payload ?? 'Failed to fetch shares with me';
      })

      .addCase(fetchSharesToOthers.pending, (state) => {
        state.status.fetchToOthers = 'loading';
      })
      .addCase(fetchSharesToOthers.fulfilled, (state, action: PayloadAction<ShareDto[]>) => {
        state.status.fetchToOthers = 'succeeded';
        state.sharesToOthers = action.payload;
      })
      .addCase(fetchSharesToOthers.rejected, (state, action) => {
        state.status.fetchToOthers = 'failed';
        state.error.fetchToOthers = action.payload ?? 'Failed to fetch shares to others';
      })

      .addCase(extendShareExpiration.pending, (state) => {
        state.status.extend = 'loading';
      })
      .addCase(extendShareExpiration.fulfilled, (state, action) => {
        state.status.extend = 'succeeded';
        const { id, newDate } = action.meta.arg;
        const share = state.sharesToOthers.find((s) => s.id === id);
        if (share) {
          share.expiresAt = newDate;
        }
      })
      .addCase(extendShareExpiration.rejected, (state, action) => {
        state.status.extend = 'failed';
        state.error.extend = action.payload ?? 'Failed to extend expiration date';
      });
  },
});

export const { clearAccess, clearShare, clearShares } = shareSlice.actions;
export default shareSlice.reducer;
