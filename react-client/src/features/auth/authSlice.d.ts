import { User } from '../../types/UserDto';
export interface AuthState {
    user: User | null;
    token: string | null;
    loginLoading: boolean;
    registerLoading: boolean;
    loginError: string | null;
    registerError: string | null;
}
export declare const loginUser: import("@reduxjs/toolkit").AsyncThunk<any, {
    email: string;
    password: string;
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
export declare const registerUser: import("@reduxjs/toolkit").AsyncThunk<any, {
    email: string;
    password: string;
    name: string;
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
export declare const logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">, clearErrors: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/clearErrors">;
declare const _default: import("redux").Reducer<AuthState>;
export default _default;
