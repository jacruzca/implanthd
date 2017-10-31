import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LoginStoreState } from './user/types/LoginTypes';
import { login } from './user/reducers/LoginReducer';
import { signUp } from './user/reducers/SignUpReducer';
import { user } from './user/reducers/UserReducer';
import { profile } from './user/reducers/EditUserReducer';
import { SignUpStoreState } from './user/types/SignUpTypes';
import { UserStoreState } from './user/types/UserTypes';
import { EditUserStoreState } from './user/types/EditUserTypes';

export interface RootState {
    login: LoginStoreState;
    signUp: SignUpStoreState;
    user: UserStoreState;
    profile: EditUserStoreState;
    form: any;
}

export default combineReducers<RootState>({
    login,
    signUp,
    user,
    profile,
    form: formReducer,
});