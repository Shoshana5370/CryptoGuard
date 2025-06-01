import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store/store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    auth: import("./features/auth/authSlice").AuthState;
    files: import("./features/files/filesSlice").FilesState;
    share: import("./features/shares/shareSlice").ShareState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<any>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
