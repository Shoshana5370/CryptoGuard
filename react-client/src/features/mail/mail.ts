
import { createSlice } from "@reduxjs/toolkit";
export interface MailDialogState {
  isOpen: boolean;
}

export const initialState: MailDialogState = {
  isOpen: false,
};

export const mailDialogSlice = createSlice({
  name: "mailDialog",
  initialState,
  reducers: {
    openMailDialog: (state) => {
      state.isOpen = true;
    },
    closeMailDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMailDialog, closeMailDialog } = mailDialogSlice.actions;
export default mailDialogSlice.reducer;
