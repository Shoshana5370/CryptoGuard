// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice'; 
import uploadReducer from '../features/files/uploadslice'; 
import shareFileReducer from '../features/shares/shareFileSlice';
import sharesReducer from '../features/shares/shareSlice';
import accessReducer from '../features/shares/accessSlice';
const rootReducer = (state:any, action: any) => {
  if (action.type === 'auth/logout') {
    // Reset all slices of state
    state = undefined; // This will clear all state slices
  }
  return {
    auth: authReducer(state?.auth, action),
    files: filesReducer(state?.files, action),
    upFiles: uploadReducer(state?.upFiles, action),
    shareFile: shareFileReducer(state?.shareFile, action),
    access: accessReducer(state?.access, action),
    share: sharesReducer(state?.share, action),
  };
};

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
