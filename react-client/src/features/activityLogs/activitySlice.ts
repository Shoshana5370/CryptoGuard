// src/redux/slices/activitySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Log } from "../../types/Log";
import axiosInstance from "@/axiosInstance";

export interface ActivityState {
  logs: Log[];
  loading: boolean;
  error: string | null;
}

const initialState: ActivityState = {
  logs: [],
  loading: false,
  error: null,
};

// Thunk to fetch logs by userId
export const fetchLogsByUser = createAsyncThunk<Log[], number>(
  "activity/fetchLogsByUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/api/ActivityLogs/user/${userId}`);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data || "Failed to fetch logs");
    }
  }
);

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogsByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchLogsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default activitySlice.reducer;
