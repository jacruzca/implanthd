import { SIGNUP_CHECK, SIGNUP_FAILED, SIGNUP_SUCCESS } from '../types/SignUpTypes';

export interface SignUpCheckAction {
    type: SIGNUP_CHECK;
    email: string;
    password: string;
}

export interface SignUpSuccessAction {
    type: SIGNUP_SUCCESS;
    user: object;
    token: string;
}

export interface SignUpFailedAction {
    type: SIGNUP_FAILED;
    errorMessage: string;
}

export type SignUpAction = SignUpCheckAction | SignUpSuccessAction | SignUpFailedAction;

export function signUpCheck(email: string, password: string): SignUpCheckAction {
    return {
        type: SIGNUP_CHECK,
        email,
        password,
    };
}

export function signUpSuccess(user: {}, token: string): SignUpSuccessAction {
    return {
        type: SIGNUP_SUCCESS,
        user,
        token,
    };
}

export function signUpFailed(errorMessage: string): SignUpFailedAction {
    return {
        type: SIGNUP_FAILED,
        errorMessage,
    };
}