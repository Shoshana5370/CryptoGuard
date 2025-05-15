// // // src/store/accessSlice.ts
// // import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// // import axiosInstance from '../../axiosInstance';

// import axiosInstance from "@/axiosInstance";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // export interface AccessState {
// //   fileBlob?: Blob;
// //   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// //   error: string | object | null;
// // }

// // const initialState: AccessState = {
// //   status: 'idle',
// //   error: null,
// // };

// // export const accessSharedFile = createAsyncThunk(
// //   'access/accessSharedFile',
// //   async (code: string, { rejectWithValue }) => {
// //     try {
// //       const response = await axiosInstance.post<Blob>(
// //         `/api/Share/access`,
// //         JSON.stringify(code),
// //         {
// //           headers: { 'Content-Type': 'application/json' },
// //           responseType: 'blob',
// //         }
// //       );
// //       return response.data;
// //     } catch (err: any) {
// //       return rejectWithValue(err.response?.data || 'Error accessing shared file');
// //     }
// //   }
// // );
// export interface AccessState {
//   fileBlob?: Blob;
//   fileName?: string;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | object | null;
// }

// export const accessSharedFile = createAsyncThunk(
//   'access/accessSharedFile',
//   async (code: string, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post<Blob>(
//         `/api/Share/access`,
//         JSON.stringify(code),
//         {
//           headers: { 'Content-Type': 'application/json' },
//           responseType: 'blob',
//         }
//       );

//       // Extract filename from Content-Disposition header
//       const disposition = response.headers['content-disposition'];
//       let filename = 'shared-file';

//       if (disposition && disposition.includes('filename=')) {
//         filename = disposition
//           .split('filename=')[1]
//           .replace(/['"]/g, '')
//           .trim();
//       }

//       return { blob: response.data, filename }; // Return both
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data || 'Error accessing shared file');
//     }
//   }
// );


// const accessSlice:AccessState = createSlice({
//   name: 'access',
//   initialState,
//   reducers: {
//     clearAccess(state) {
//       state.fileBlob = undefined;
//       state.status = 'idle';
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(accessSharedFile.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(accessSharedFile.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.fileBlob = action.payload;
//       })
//       .addCase(accessSharedFile.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearAccess } = accessSlice.actions;
// export default accessSlice.reducer;
// src/store/accessSlice.ts

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
