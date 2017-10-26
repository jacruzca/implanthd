import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginStoreState } from './user/types/LoginTypes';
import { login } from './user/reducers/LoginReducer';

export interface RootState {
    login: LoginStoreState;
    form: any;
}

export default combineReducers<RootState>({
    login,
    form: formReducer
});