import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/axiosInstance';
const initialState = {
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
// Thunks
export const accessSharedFile = createAsyncThunk('share/accessSharedFile', async ({ shareId, code }, { rejectWithValue }) => {
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
    }
    catch (err) {
        return rejectWithValue(err.message || 'Error accessing shared file');
    }
});
export const shareFile = createAsyncThunk('share/shareFile', async (shareData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/api/Share`, shareData);
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err.response?.data || 'Error sharing file');
    }
});
export const fetchSharesWithMe = createAsyncThunk('share/fetchSharesWithMe', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get(`/api/User/GetSharesWithMe`);
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message || 'Failed to fetch shares with me');
    }
});
export const fetchSharesToOthers = createAsyncThunk('share/fetchSharesToOthers', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get(`/api/User/GetSharesToOthers`);
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message || 'Failed to fetch shares to others');
    }
});
export const extendShareExpiration = createAsyncThunk('share/extendExpiration', async ({ id, newDate }, thunkAPI) => {
    try {
        await axiosInstance.post(`/api/Share/${id}`, { newDate });
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message.toString() || 'Failed to extend expiration');
    }
});
// Slice
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
            // Access shared file
            .addCase(accessSharedFile.pending, (state) => {
            state.status.access = 'loading';
        })
            .addCase(accessSharedFile.fulfilled, (state, action) => {
            state.status.access = 'succeeded';
            state.currentFile = { blob: action.payload.blob, name: action.payload.filename };
        })
            .addCase(accessSharedFile.rejected, (state, action) => {
            state.status.access = 'failed';
            state.error.access = action.payload;
        })
            // Share file
            .addCase(shareFile.pending, (state) => {
            state.status.share = 'loading';
        })
            .addCase(shareFile.fulfilled, (state, action) => {
            state.status.share = 'succeeded';
            state.createdShare = action.payload;
        })
            .addCase(shareFile.rejected, (state, action) => {
            state.status.share = 'failed';
            state.error.share = action.payload;
        })
            // Shares with me
            .addCase(fetchSharesWithMe.pending, (state) => {
            state.status.fetchWithMe = 'loading';
        })
            .addCase(fetchSharesWithMe.fulfilled, (state, action) => {
            state.status.fetchWithMe = 'succeeded';
            state.sharesWithMe = action.payload;
        })
            .addCase(fetchSharesWithMe.rejected, (state, action) => {
            state.status.fetchWithMe = 'failed';
            state.error.fetchWithMe = action.payload ?? 'Failed to fetch shares with me';
        })
            // Shares to others
            .addCase(fetchSharesToOthers.pending, (state) => {
            state.status.fetchToOthers = 'loading';
        })
            .addCase(fetchSharesToOthers.fulfilled, (state, action) => {
            state.status.fetchToOthers = 'succeeded';
            state.sharesToOthers = action.payload;
        })
            .addCase(fetchSharesToOthers.rejected, (state, action) => {
            state.status.fetchToOthers = 'failed';
            state.error.fetchToOthers = action.payload ?? 'Failed to fetch shares to others';
        })
            // Extend share expiration
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
