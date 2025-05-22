import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store/store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    auth: import("./features/auth/authSlice").AuthState;
    files: import("./features/files/filesSlice").FilesState;
    upFiles: import("./features/files/uploadslice").UploadState;
    shareFile: import("./features/shares/shareFileSlice").ShareState;
    access: import("./features/shares/accessSlice").AccessState;
    share: import("./features/shares/shareSlice").ShareState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<any>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
