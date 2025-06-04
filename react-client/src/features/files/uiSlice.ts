import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isUploadDialogOpen: false,
  },
  reducers: {
    openUploadDialog: (state) => {
      state.isUploadDialogOpen = true;
    },
    closeUploadDialog: (state) => {
      state.isUploadDialogOpen = false;
    },
  },
});

export const { openUploadDialog, closeUploadDialog } = uiSlice.actions;
export default uiSlice.reducer;
