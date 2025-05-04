// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice'; // Adjust the import path as needed
import uploadReducer from '../features/files/uploadslice'; // Adjust the import path as needed
export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    upFiles: uploadReducer, // Adjust the import path as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
