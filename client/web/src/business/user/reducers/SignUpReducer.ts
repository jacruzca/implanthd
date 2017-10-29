import { SignUpAction } from '../actions/SignUpActions';
import { SIGNUP_CHECK, SIGNUP_FAILED, SIGNUP_SUCCESS, SignUpStoreState } from '../types/SignUpTypes';

const initialState: SignUpStoreState = {
    isLoading: false,
};

export function signUp(state: SignUpStoreState = initialState, action: SignUpAction): SignUpStoreState {
    switch (action.type) {
        case SIGNUP_CHECK:
            return {
                isLoading: true,
            };
        case SIGNUP_SUCCESS:
            return {
                user: action.user,
                token: action.token,
                isLoading: false,
                success: true,
            };
        case SIGNUP_FAILED:
            return {
                isLoading: false,
                error: true,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
}