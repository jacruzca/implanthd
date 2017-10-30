export const USER_CHECK = 'USER_CHECK';
export type USER_CHECK = typeof USER_CHECK;
export const USER_SUCCESS = 'USER_SUCCESS';
export type USER_SUCCESS = typeof USER_SUCCESS;
export const USER_FAILED = 'USER_FAILED';
export type USER_FAILED = typeof USER_FAILED;

export interface UserStoreState {
    isLoading: boolean;
    success?: boolean;
    error?: boolean;
    errorMessage?: string;
    user?: object;
}