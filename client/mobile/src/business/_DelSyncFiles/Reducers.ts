import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginStoreState } from './user/types/LoginTypes';
import { login } from './user/reducers/LoginReducer';
import { signUp } from './user/reducers/SignUpReducer';
import { user } from './user/reducers/UserReducer';
import { SignUpStoreState } from './user/types/SignUpTypes';
import { UserStoreState } from './user/types/UserTypes';

export interface RootState {
    login: LoginStoreState;
    signUp: SignUpStoreState;
    user: UserStoreState,
    form: any;
}

export default combineReducers<RootState>({
    login,
    signUp,
    user,
    form: formReducer,
});