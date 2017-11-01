import {
    EDIT_IMAGE_PROFILE, EDIT_IMAGE_PROFILE_FAILED, EDIT_IMAGE_PROFILE_SUCCESS, EDIT_USER, EDIT_USER_FAILED,
    EDIT_USER_SUCCESS,
    EditUserStoreState,
} from '../types/EditUserTypes';
import { EditUserAction } from '../actions/EditUserActions';

const initialState: EditUserStoreState = {
    isLoading: false,
};

export function profile(state: EditUserStoreState = initialState, action: EditUserAction): EditUserStoreState {
    switch (action.type) {
        case EDIT_USER:
            return {
                isLoading: true,
            };
        case EDIT_USER_SUCCESS:
            return {
                isLoading: false,
                success: true,
            };
        case EDIT_USER_FAILED:
            return {
                isLoading: false,
                error: true,
                errorMessage: action.errorMessage,
            };
        case EDIT_IMAGE_PROFILE:
            return {
                isLoading: true,
            };
        case EDIT_IMAGE_PROFILE_SUCCESS:
            return {
                isLoading: false,
                success: true,
            };
        case EDIT_IMAGE_PROFILE_FAILED:
            return {
                isLoading: false,
                error: true,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
}