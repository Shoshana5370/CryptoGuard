// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice'; 
import uploadReducer from '../features/files/uploadslice'; 
import shareFileReducer from '../features/shares/shareFileSlice';
import sharesReducer from '../features/shares/shareSlice';
import accessReducer from '../features/shares/accessSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    upFiles: uploadReducer, 
    shareFile: shareFileReducer,
    access: accessReducer,
    share: sharesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
