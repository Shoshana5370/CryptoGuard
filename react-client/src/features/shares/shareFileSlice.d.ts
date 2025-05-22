import { SharePostModel } from '../../types/SharePostModel';
import { ShareDto } from '../../types/ShareDto';
export interface ShareState {
    share?: ShareDto;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | object | null;
}
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
export declare const clearShare: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"share/clearShare">;
declare const _default: import("redux").Reducer<ShareState>;
export default _default;
