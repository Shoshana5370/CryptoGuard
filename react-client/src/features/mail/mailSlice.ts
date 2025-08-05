// src/redux/slices/emailSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/axiosInstance";

export interface EmailRequest {
  subject: string;
  messageBody: string;
}

export interface EmailState {
  sending: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: EmailState = {
  sending: false,
  success: false,
  error: null,
};

// Async thunk
export const sendEmail = createAsyncThunk<
  void,                          // Return type on success
  EmailRequest,                  // Input parameter to thunk
  { rejectValue: string }        // Rejected value type
>("email/send", async (emailData, thunkAPI) => {
  try {
    await axiosInstance.post("/api/users/mail", emailData);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data || "Failed to send email.");
  }
});

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    resetEmailState: (state) => {
      state.sending = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.sending = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state) => {
        state.sending = false;
        state.success = true;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.sending = false;
        state.error = action.payload || "Unknown error.";
      });
  },
});

export const { resetEmailState } = emailSlice.actions;
export default emailSlice.reducer;
