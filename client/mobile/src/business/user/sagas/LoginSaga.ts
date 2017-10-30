import { call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    LoginCheckAction, loginFailed, LoginFailedAction, loginSuccess,
    LoginSuccessAction,
} from '../actions/LoginActions';
import { LOGIN_CHECK } from '../types/LoginTypes';
import ApiInterface from '../../ApiInterface';
import UserApi from '../api/UserApi';

function* checkLoginWorker(api: ApiInterface, action: LoginCheckAction) {
    try {
        const userApi = new UserApi(api);
        const result = yield call(userApi.signIn, action.email, action.password, action.rememberSession);
        const {user, token} = result.data;
        const successAction: LoginSuccessAction = loginSuccess(user, token.accessToken);
        yield put(successAction);
    } catch (e) {
        const errorAction: LoginFailedAction = loginFailed(e.message);
        yield put(errorAction);
    }
}

function* watchLogin(api: ApiInterface) {
    yield takeEvery(LOGIN_CHECK, checkLoginWorker, api);
}

export default function* root(api: ApiInterface) {
    yield fork(watchLogin, api);
}