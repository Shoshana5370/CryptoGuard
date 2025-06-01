export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    auth: import("../features/auth/authSlice").AuthState;
    files: import("../features/files/filesSlice").FilesState;
    share: import("../features/shares/shareSlice").ShareState;
}, any, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        auth: import("../features/auth/authSlice").AuthState;
        files: import("../features/files/filesSlice").FilesState;
        share: import("../features/shares/shareSlice").ShareState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
