export const LOGIN_CHECK = 'LOGIN_CHECK';
export type LOGIN_CHECK = typeof LOGIN_CHECK;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export const LOGIN_FAILED = 'LOGIN_FAILED';
export type LOGIN_FAILED = typeof LOGIN_FAILED;
export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface LoginStoreState {
    isLoading: boolean;
    success?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    user?: object;
    token?: string;
}