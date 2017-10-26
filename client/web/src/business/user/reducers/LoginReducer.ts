import { LoginAction } from '../actions/LoginActions';
import { LOGIN_CHECK, LoginStoreState } from '../types/LoginTypes';

const initialState: LoginStoreState = {
    isLoading: false,
};

export function login(state: LoginStoreState = initialState, action: LoginAction): LoginStoreState {
    switch (action.type) {
        case LOGIN_CHECK:
            return {isLoading: true};
        default:
            return state;
    }
}