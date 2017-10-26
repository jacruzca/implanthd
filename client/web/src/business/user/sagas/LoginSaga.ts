import { call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    LoginCheckAction, loginFailed, LoginFailedAction, loginSuccess,
    LoginSuccessAction,
} from '../actions/LoginActions';
import { LOGIN_CHECK } from '../types/LoginTypes';
import { delay } from 'redux-saga';

function* checkLoginWorker(action: LoginCheckAction) {
    try {
        console.log('Worker!');
        yield call(delay, 1000);
        const successAction: LoginSuccessAction =
            loginSuccess({email: action.email}, 'sdddd');
        yield put(successAction);
    } catch (e) {
        const errorAction: LoginFailedAction = loginFailed(e.message);
        yield put(errorAction);
    }
}

function* watchLogin() {
    yield takeEvery(LOGIN_CHECK, checkLoginWorker);
}

export default function* root() {
    yield fork(watchLogin);
}