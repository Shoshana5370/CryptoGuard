import { FileDto } from '../../types/FileDto';
import { FilePostModel } from '../../types/FilePostModel';
import { RootState } from '../../store/store';
export interface FilesState {
    items: FileDto[];
    isFetching: boolean;
    hasFetched: boolean;
    fetchError: string | null;
    isDeletingById: {
        [fileId: number]: boolean;
    };
    deleteErrorById: {
        [fileId: number]: string | null;
    };
    isUpdating: boolean;
    updateError: string | null;
    uploading: boolean;
    uploadError: string | null;
    progress: number;
    uploadedFile: FilePostModel | undefined;
}
export declare const fetchFilesByUserId: import("@reduxjs/toolkit").AsyncThunk<FileDto[], void, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteFile: import("@reduxjs/toolkit").AsyncThunk<number, number, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateFile: import("@reduxjs/toolkit").AsyncThunk<FileDto, FileDto, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const uploadFileContent: import("@reduxjs/toolkit").AsyncThunk<FileDto, {
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
export declare const clearFiles: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"files/clearFiles">, resetUploadState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"files/resetUploadState">, setProgress: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "files/setProgress">;
declare const _default: import("redux").Reducer<FilesState>;
export default _default;
