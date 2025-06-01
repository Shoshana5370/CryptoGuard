import { RootState } from '@/store/store';
import { ShareDto } from '@/types/ShareDto';
import { SharePostModel } from '@/types/SharePostModel';
export interface ShareState {
    currentFile?: {
        blob: Blob;
        name: string;
    };
    createdShare?: ShareDto;
    sharesWithMe: ShareDto[];
    sharesToOthers: ShareDto[];
    status: {
        access: 'idle' | 'loading' | 'succeeded' | 'failed';
        share: 'idle' | 'loading' | 'succeeded' | 'failed';
        fetchWithMe: 'idle' | 'loading' | 'succeeded' | 'failed';
        fetchToOthers: 'idle' | 'loading' | 'succeeded' | 'failed';
        extend: 'idle' | 'loading' | 'succeeded' | 'failed';
    };
    error: {
        access?: string;
        share?: string;
        fetchWithMe?: string;
        fetchToOthers?: string;
        extend?: string;
    };
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
export declare const shareFile: import("@reduxjs/toolkit").AsyncThunk<ShareDto, SharePostModel, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSharesWithMe: import("@reduxjs/toolkit").AsyncThunk<ShareDto[], void, {
    state: RootState;
    rejectValue: string;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSharesToOthers: import("@reduxjs/toolkit").AsyncThunk<ShareDto[], void, {
    state: RootState;
    rejectValue: string;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const extendShareExpiration: import("@reduxjs/toolkit").AsyncThunk<void, {
    id: number;
    newDate: string;
}, {
    state: RootState;
    rejectValue: string;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const clearAccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/clearAccess">, clearShare: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/clearShare">, clearShares: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/clearShares">;
declare const _default: import("redux").Reducer<ShareState>;
export default _default;
