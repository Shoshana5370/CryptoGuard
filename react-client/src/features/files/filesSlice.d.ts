import { RootState } from '../../store/store';
import { FileDto } from '../../types/FileDto';
export interface FilesState {
    items: FileDto[];
    loading: boolean;
    error: string | object | null;
}
export declare const fetchFilesByUserId: import("@reduxjs/toolkit").AsyncThunk<FileDto[], void, {
    state: RootState;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteFile: import("@reduxjs/toolkit").AsyncThunk<number, number, {
    state: RootState;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateFile: import("@reduxjs/toolkit").AsyncThunk<FileDto, FileDto, {
    state: RootState;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const clearFiles: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"files/clearFiles">;
declare const _default: import("redux").Reducer<FilesState>;
export default _default;
