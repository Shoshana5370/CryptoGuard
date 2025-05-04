// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice'; 
import uploadReducer from '../features/files/uploadslice'; 
export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    upFiles: uploadReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
