export const SIGNUP_CHECK = 'SIGNUP_CHECK';
export type SIGNUP_CHECK = typeof SIGNUP_CHECK;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export type SIGNUP_SUCCESS = typeof SIGNUP_SUCCESS;
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export type SIGNUP_FAILED = typeof SIGNUP_FAILED;

export interface SignUpStoreState {
    isLoading: boolean;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
    user?: object;
    token?: string;
}