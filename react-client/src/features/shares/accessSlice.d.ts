export interface AccessState {
    fileBlob?: Blob;
    fileName?: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | object | null;
}
export declare const accessSharedFile: import("@reduxjs/toolkit").AsyncThunk<{
    blob: Blob;
    filename: any;
}, {
    shareId: number;
    code: string;
}, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const clearAccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"access/clearAccess">;
declare const _default: import("redux").Reducer<AccessState>;
export default _default;
