import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginStoreState } from './user/types/LoginTypes';
import { login } from './user/reducers/LoginReducer';
import { signUp } from './user/reducers/SignUpReducer';
import { SignUpStoreState } from './user/types/SignUpTypes';

export interface RootState {
    login: LoginStoreState;
    signUp: SignUpStoreState;
    form: any;
}

export default combineReducers<RootState>({
    login,
    signUp,
    form: formReducer,
});