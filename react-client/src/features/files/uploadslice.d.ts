import { RootState } from '../../store/store';
import { FilePostModel } from '../../types/FilePostModel';
export interface UploadState {
    uploading: boolean;
    success: boolean;
    error: string | object | null;
    uploadedFile?: FilePostModel;
}
export declare const uploadFileContent: import("@reduxjs/toolkit").AsyncThunk<FilePostModel, {
    file: File;
    fileName?: string;
}, {
    rejectValue: string;
    state: RootState;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const resetUploadState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"upload/resetUploadState">;
declare const _default: import("redux").Reducer<UploadState>;
export default _default;
