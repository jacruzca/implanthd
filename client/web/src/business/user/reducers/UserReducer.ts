import { USER_CHECK, USER_FAILED, USER_SUCCESS, UserStoreState } from '../types/UserTypes';
import { UserAction } from '../actions/UserActions';

const initialState: UserStoreState = {
    isLoading: false,
};

export function user(state: UserStoreState = initialState, action: UserAction): UserStoreState {
    switch (action.type) {
        case USER_CHECK:
            return {
                isLoading: true,
            };
        case USER_SUCCESS:
            return {
                user: action.user,
                isLoading: false,
                success: true,
            };
        case USER_FAILED:
            return {
                isLoading: false,
                error: true,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
}