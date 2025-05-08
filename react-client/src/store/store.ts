// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice'; 
import uploadReducer from '../features/files/uploadslice'; 
import shareReducer from '../features/shares/shareSlice';
import accessReducer from '../features/shares/accessSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    upFiles: uploadReducer, 
    share: shareReducer,
    access: accessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
