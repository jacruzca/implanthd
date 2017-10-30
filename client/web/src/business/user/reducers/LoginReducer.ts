import { LoginAction } from '../actions/LoginActions';
import { LOGIN_CHECK, LOGIN_FAILED, LOGIN_SUCCESS, LoginStoreState, LOGOUT } from '../types/LoginTypes';

const initialState: LoginStoreState = {
    isLoading: false,
};

export function login(state: LoginStoreState = initialState, action: LoginAction): LoginStoreState {
    switch (action.type) {
        case LOGIN_CHECK:
            return {
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            return {
                user: action.user,
                token: action.token,
                isLoading: false,
                success: true,
            };
        case LOGIN_FAILED:
            return {
                isLoading: false,
                hasError: true,
                errorMessage: action.error,
            };
        case LOGOUT:
            return {
                isLoading: false,
                hasError: false,
                errorMessage: undefined,
                user: undefined,
                token: undefined,
            };
        default:
            return state;
    }
}