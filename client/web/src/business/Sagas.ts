import { fork } from 'redux-saga/effects';

import loginSaga from './user/sagas/LoginSaga';
import ApiInterface from './ApiInterface';

export default function* rootSaga(api: ApiInterface) {
    yield fork(loginSaga, api);
}