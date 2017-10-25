import LoginComponent from '../components/LoginComponent';
import { RootState } from '../../business/Reducers';
import {
    LoginAction,
    loginCheck,
} from '../../business/user/actions/LoginActions';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({login}: RootState) {
    return {
        name: '',
        isLoading: login.isLoading,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<LoginAction>) {
    return {
        loginCheck: (email: string,
                     password: string,
                     remember: boolean) =>
            dispatch(loginCheck(email, password, remember)),
    };
}

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);