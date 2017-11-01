export const EDIT_USER = 'EDIT_USER';
export type EDIT_USER = typeof EDIT_USER;
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export type EDIT_USER_SUCCESS = typeof EDIT_USER_SUCCESS;
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';
export type EDIT_USER_FAILED = typeof EDIT_USER_FAILED;

export const EDIT_IMAGE_PROFILE = 'EDIT_IMAGE_PROFILE';
export type EDIT_IMAGE_PROFILE = typeof EDIT_IMAGE_PROFILE;
export const EDIT_IMAGE_PROFILE_SUCCESS = 'EDIT_IMAGE_PROFILE_SUCCESS';
export type EDIT_IMAGE_PROFILE_SUCCESS = typeof EDIT_IMAGE_PROFILE_SUCCESS;
export const EDIT_IMAGE_PROFILE_FAILED = 'EDIT_IMAGE_PROFILE_FAILED';
export type EDIT_IMAGE_PROFILE_FAILED = typeof EDIT_IMAGE_PROFILE_FAILED;

export interface EditUserStoreState {
    isLoading: boolean;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
    user?: any;
}