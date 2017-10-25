import {LoginAction} from '../actions/LoginActions';
import {LOGIN_CHECK} from '../types/LoginTypes';

export function login(state: any, action: LoginAction): any {
    switch (action.type) {
        case LOGIN_CHECK:
            return {
                ...state, login: {
                    isLoading: true,
                },
            };
        default:
            return state;
    }
}