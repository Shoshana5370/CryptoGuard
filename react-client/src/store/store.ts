
import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../features/files/filesSlice'; 
import sharesReducer from '../features/shares/shareSlice';
import authReducer from '../features/auth/authSlice';
import uiReducer from '../features/files/uiSlice';
const rootReducer = (state:any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined; 
  }
  return {
    auth: authReducer(state?.auth, action),
    files: filesReducer(state?.files, action),
    share: sharesReducer(state?.share, action),
    ui: uiReducer(state?.ui, action),
  };
};

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
