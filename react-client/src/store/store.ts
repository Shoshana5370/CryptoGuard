
import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../features/files/filesSlice'; 
import sharesReducer from '../features/shares/shareSlice';
import authReducer from '../features/auth/authSlice';
import uiReducer from '../features/files/uiSlice';
import activityReducer from '../features/activityLogs/activitySlice';
import mailDialogReducer from '../features/mail/mailSlice'; 
import mailStateReducer from '../features/mail/mail'; 
const rootReducer = (state:any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined; 
  }
  return {
    auth: authReducer(state?.auth, action),
    files: filesReducer(state?.files, action),
    share: sharesReducer(state?.share, action),
    ui: uiReducer(state?.ui, action),
    logs:activityReducer(state?.activityLogs, action), 
    mailDialog: mailDialogReducer(state?.mailDialog, action),
    mailState: mailStateReducer(state?.mailState, action),
  };
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

