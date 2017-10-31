export const EDIT_USER = 'EDIT_USER';
export type EDIT_USER = typeof EDIT_USER;
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export type EDIT_USER_SUCCESS = typeof EDIT_USER_SUCCESS;
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';
export type EDIT_USER_FAILED = typeof EDIT_USER_FAILED;

export interface EditUserStoreState {
    isLoading: boolean;
    isProfileLoading: boolean;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
    user?: any;
}