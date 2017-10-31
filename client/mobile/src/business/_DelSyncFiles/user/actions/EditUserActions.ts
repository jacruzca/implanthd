import {
    EDIT_USER, EDIT_USER_FAILED, EDIT_USER_LOAD, EDIT_USER_LOAD_FAILED,
    EDIT_USER_LOAD_SUCCESS, EDIT_USER_SUCCESS,
} from '../types/EditUserTypes';

export interface EditUserLoadAction {
    type: EDIT_USER_LOAD;
    id: string;
}

export interface EditUserLoadSuccessAction {
    type: EDIT_USER_LOAD_SUCCESS;
    user: object;
}

export interface EditUserLoadFailedAction {
    type: EDIT_USER_LOAD_FAILED;
    loadErrorMessage: string;
}

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

export type EditUserAction = EditUserLoadAction |
    EditUserLoadSuccessAction |
    EditUserLoadFailedAction |
    UserEditAction |
    EditUserSuccessAction |
    EditUserFailedAction;

export function editUserLoad(id: string): EditUserLoadAction {
    return {
        type: EDIT_USER_LOAD,
        id,
    };
}

export function editUserLoadSuccess(user: object): EditUserLoadSuccessAction {
    return {
        type: EDIT_USER_LOAD_SUCCESS,
        user,
    };
}

export function editUserLoadFailed(loadErrorMessage: string): EditUserLoadFailedAction {
    return {
        type: EDIT_USER_LOAD_FAILED,
        loadErrorMessage,
    };
}

export function editUser(id: string, user: object): UserEditAction {
    return {
        type: EDIT_USER,
        id,
        user,
    };
}

export function editUserSuccess(user: object): EditUserLoadSuccessAction {
    return {
        type: EDIT_USER_LOAD_SUCCESS,
        user,
    };
}