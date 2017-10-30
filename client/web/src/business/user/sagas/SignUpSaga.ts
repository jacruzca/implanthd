import { call, fork, put, takeEvery } from 'redux-saga/effects';
import ApiInterface from '../../ApiInterface';
import UserApi from '../api/UserApi';
import {
    SignUpCheckAction, signUpFailed, SignUpFailedAction, signUpSuccess,
    SignUpSuccessAction,
} from '../actions/SignUpActions';
import { SIGNUP_CHECK } from '../types/SignUpTypes';

function* checkSignUpWorker(api: ApiInterface, action: SignUpCheckAction) {
    try {
        const userApi = new UserApi(api);
        const {email, password} = action;
        const result = yield call(userApi.signUp, {email, password});
        const {user, token} = result.data;
        const successAction: SignUpSuccessAction = signUpSuccess(user, token.accessToken);
        yield put(successAction);
    } catch (e) {
        let message = e.message;
        if (e.response.status === 409) {
            message = `Un usuario ya se encuentra registrado con el correo ${action.email}`;
        } else if (e.response.status === 400) {
            message = `Error en la validación de datos`;
        }
        const errorAction: SignUpFailedAction = signUpFailed(message);
        yield put(errorAction);
    }
}

function* watchSignUp(api: ApiInterface) {
    yield takeEvery(SIGNUP_CHECK, checkSignUpWorker, api);
}

export default function* root(api: ApiInterface) {
    yield fork(watchSignUp, api);
}