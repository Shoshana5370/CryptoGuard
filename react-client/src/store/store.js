import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/files/filesSlice';
import sharesReducer from '../features/shares/shareSlice';
const rootReducer = (state, action) => {
    if (action.type === 'auth/logout') {
        state = undefined;
    }
    return {
        auth: authReducer(state?.auth, action),
        files: filesReducer(state?.files, action),
        share: sharesReducer(state?.share, action),
    };
};
export const store = configureStore({
    reducer: rootReducer,
});
