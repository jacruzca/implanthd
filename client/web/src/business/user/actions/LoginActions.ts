import { LOGIN_CHECK, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../types/LoginTypes';

export interface LoginCheckAction {
    type: LOGIN_CHECK;
    email: string;
    password: string;
    rememberSession: boolean;
}

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
    user: object;
    token: string;
}

export interface LoginFailedAction {
    type: LOGIN_FAILED;
    error: string;
}

export interface LogoutAction {
    type: LOGOUT;
}

export type LoginAction = LoginCheckAction | LoginSuccessAction | LoginFailedAction | LogoutAction;

export function loginCheck(email: string, password: string, rememberSession: boolean): LoginCheckAction {
    return {
        type: LOGIN_CHECK,
        email,
        password,
        rememberSession,
    };
}

export function loginSuccess(user: {}, token: string): LoginSuccessAction {
    return {
        type: LOGIN_SUCCESS,
        user,
        token,
    };
}

export function loginFailed(error: string): LoginFailedAction {
    return {
        type: LOGIN_FAILED,
        error,
    };
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
    };
}