import {
    EDIT_IMAGE_PROFILE, EDIT_IMAGE_PROFILE_FAILED, EDIT_IMAGE_PROFILE_SUCCESS,
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

export interface EditImageProfileAction {
    type: EDIT_IMAGE_PROFILE;
    id: string;
    image: any;
}

export interface EditImageProfileSuccessAction {
    type: EDIT_IMAGE_PROFILE_SUCCESS;
    success: boolean;
}

export interface EditImageProfileFailedAction {
    type: EDIT_IMAGE_PROFILE_FAILED;
    errorMessage: string;
}

export type EditUserAction =
    UserEditAction |
    EditUserSuccessAction |
    EditUserFailedAction |
    EditImageProfileAction |
    EditImageProfileSuccessAction |
    EditImageProfileFailedAction;

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

export function editImageProfile(id: string, image: any): EditImageProfileAction {
    return {
        type: EDIT_IMAGE_PROFILE,
        id,
        image,
    };
}

export function editImageProfileSuccess(): EditImageProfileSuccessAction {
    return {
        type: EDIT_IMAGE_PROFILE_SUCCESS,
        success: true,
    };
}

export function editImageProfileFailed(errorMessage: string): EditImageProfileFailedAction {
    return {
        type: EDIT_IMAGE_PROFILE_FAILED,
        errorMessage,
    };
}