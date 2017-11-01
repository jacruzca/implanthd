import { call, fork, put, takeEvery } from 'redux-saga/effects';
import ApiInterface from '../../ApiInterface';
import UserApi from '../api/UserApi';
import { USER_CHECK } from '../types/UserTypes';
import { UserCheckAction, userFailed, UserFailedAction, userSuccess, UserSuccessAction } from '../actions/UserActions';
import { EDIT_USER } from '../types/EditUserTypes';
import {
    editUserFailed, EditUserFailedAction, editUserSuccess, EditUserSuccessAction,
    UserEditAction,
} from '../actions/EditUserActions';

function* checkUserWorker(api: ApiInterface, action: UserCheckAction) {
    try {
        const userApi = new UserApi(api);
        const result = yield call(userApi.getUser, action.id);
        const successAction: UserSuccessAction = userSuccess(result.data);
        yield put(successAction);
    } catch (e) {
        const errorAction: UserFailedAction = userFailed(`Usuario con id ${action.id} no encontrado`);
        yield put(errorAction);
    }
}

function* checkEditUserWorker(api: ApiInterface, action: UserEditAction) {
    try {
        const userApi = new UserApi(api);
        yield call(userApi.updateUser, action.id, action.user);
        const successAction: EditUserSuccessAction = editUserSuccess();
        yield put(successAction);
    } catch (e) {
        const errorAction: EditUserFailedAction = editUserFailed(`Error al actualizar`);
        yield put(errorAction);
    }
}

function* watchUser(api: ApiInterface) {
    yield takeEvery(USER_CHECK, checkUserWorker, api);
}

function* watchEditUser(api: ApiInterface) {
    yield takeEvery(EDIT_USER, checkEditUserWorker, api);
}

export default function* root(api: ApiInterface) {
    yield fork(watchUser, api);
    yield fork(watchEditUser, api);
}