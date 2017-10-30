import { fork } from 'redux-saga/effects';

import loginSaga from './user/sagas/LoginSaga';
import signUpSaga from './user/sagas/SignUpSaga';
import ApiInterface from './ApiInterface'; ///aaa

export default function* rootSaga(api: ApiInterface) {
    yield fork(loginSaga, api);
    yield fork(signUpSaga, api);
}