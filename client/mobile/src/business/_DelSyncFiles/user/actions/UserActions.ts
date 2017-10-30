import { USER_CHECK, USER_FAILED, USER_SUCCESS } from '../types/UserTypes';

export interface UserCheckAction {
    type: USER_CHECK;
    id: string;
}

export interface UserSuccessAction {
    type: USER_SUCCESS;
    user: object;
    token: string;
}

export interface UserFailedAction {
    type: USER_FAILED;
    errorMessage: string;
}

export type UserAction = UserCheckAction | UserSuccessAction | UserFailedAction;

export function userCheck(id: string): UserCheckAction {
    return {
        type: USER_CHECK,
        id,
    };
}

export function userSuccess(user: {}, token: string): UserSuccessAction {
    return {
        type: USER_SUCCESS,
        user,
        token,
    };
}

export function userFailed(errorMessage: string): UserFailedAction {
    return {
        type: USER_FAILED,
        errorMessage,
    };
}