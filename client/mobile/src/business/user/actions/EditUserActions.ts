import {
    EDIT_USER, EDIT_USER_FAILED, EDIT_USER_SUCCESS,
} from '../types/EditUserTypes';

export interface UserEditAction {
    type: EDIT_USER;
    id: string;
    user: object;
}

export interface EditUserSuccessAction {
    type: EDIT_USER_SUCCESS;
    success: boolean;
}

export interface EditUserFailedAction {
    type: EDIT_USER_FAILED;
    errorMessage: string;
}

export type EditUserAction =
    UserEditAction |
    EditUserSuccessAction |
    EditUserFailedAction;

export function editUser(id: string, user: object): UserEditAction {
    return {
        type: EDIT_USER,
        id,
        user,
    };
}

export function editUserSuccess(): EditUserSuccessAction {
    return {
        type: EDIT_USER_SUCCESS,
        success: true,
    };
}

export function editUserFailed(errorMessage: string): EditUserFailedAction {
    return {
        type: EDIT_USER_FAILED,
        errorMessage,
    };
}