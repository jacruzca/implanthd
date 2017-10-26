import { fork } from 'redux-saga/effects';

import loginSaga from './user/sagas/LoginSaga';

export default function* rootSaga() {
    yield fork(loginSaga);
}