import { call, fork, put, takeEvery } from 'redux-saga/effects';
import ApiInterface from '../../ApiInterface';
import UserApi from '../api/UserApi';
import {
    SignUpCheckAction, signUpFailed, SignUpFailedAction, signUpSuccess,
    SignUpSuccessAction,
} from '../actions/SignUpActions';
import { SIGNUP_CHECK } from '../types/SignUpTypes';
import { USER_CHECK } from '../types/UserTypes';
import { UserCheckAction } from '../actions/UserActions';

function* checkUserWorker(api: ApiInterface, action: UserCheckAction) {
    try {
        const userApi = new UserApi(api);
        const {email, password} = action;
        const result = yield call(userApi.getUser, {email, password});
        console.log(result);
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

function* watchUser(api: ApiInterface) {
    yield takeEvery(USER_CHECK, checkUserWorker, api);
}

export default function* root(api: ApiInterface) {
    yield fork(watchUser, api);
}