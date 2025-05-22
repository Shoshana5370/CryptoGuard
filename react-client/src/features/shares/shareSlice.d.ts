import { RootState } from '../../store/store';
import { ShareDto } from '../../types/ShareDto';
export interface ShareState {
    sharesWithMe: ShareDto[];
    sharesToOthers: ShareDto[];
    loading: {
        withMe: boolean;
        toOthers: boolean;
        extend: boolean;
    };
    error: {
        withMe: string | null;
        toOthers: string | null;
        extend: string | null;
    };
}
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
export declare const clearShares: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"shares/clearShares">;
declare const _default: import("redux").Reducer<ShareState>;
export default _default;
