import * as React from 'react';
import * as _ from 'lodash';
import * as Forms from '../../constants/forms';
import { InjectedFormProps, reduxForm } from 'redux-form';
import LoginComponent from '../components/LoginComponent';

import { RootState } from '../../business/Reducers';
import { LoginAction, loginCheck } from '../../business/user/actions/LoginActions';
import { connect, Dispatch } from 'react-redux';
import { LoginStoreState } from '../../business/user/types/LoginTypes';
import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';
import { HOME } from '../../constants/routes';
import { Redirect } from 'react-router';
import { Alert, AsyncStorage } from 'react-native';

interface LoginFormContainerDataProps {
    email?: string;
    password?: string;
}

interface LoginFormContainerStateProps extends LoginStoreState {
    errors?: Array<string>;
    history?: any;
}

interface LoginFormContainerDispatchProps {
    loginCheck: (email: string,
                 password: string,
                 remember?: boolean) => any;
}

type LoginFormContainerProps =
    LoginFormContainerDataProps &
    LoginFormContainerStateProps &
    LoginFormContainerDispatchProps &
    InjectedFormProps;

class LoginFormContainer extends React.Component<LoginFormContainerProps, {}> {

    alertShown: boolean = false;

    async componentWillMount() {
        const savedUserStr = await AsyncStorage.getItem(USER_COOKIE);
        const savedToken = await AsyncStorage.getItem(TOKEN_COOKIE);

        if (savedToken && savedUserStr) { // already logged in
            console.log('Logged in!');
            return this.props.history.replace(HOME);
        }
    }

    _submit = (values: Partial<LoginFormContainerDataProps>) => {
        if (values.email && values.password) {
            this.alertShown = false;
            this.props.loginCheck(values.email, values.password, true);
        }
    }

    redirectToHome() {
        return (
            <Redirect to={HOME}/>
        );
    }

    render() {

        const {handleSubmit, errors, isLoading, invalid, submitFailed, user, token, hasError, history} = this.props;

        if (hasError && !this.alertShown) {
            this.alertShown = true;
            Alert.alert('Error', 'Credenciales inválidas');
        }

        if (user && token) { // login success
            AsyncStorage.setItem(USER_COOKIE, JSON.stringify(user));
            AsyncStorage.setItem(TOKEN_COOKIE, token);
            return this.redirectToHome();
        }

        const formProps = {
            invalid,
            submitFailed,
            errors,
            isLoading,
        };

        return <LoginComponent history={history} {...formProps}
                               handleSubmit={handleSubmit(values => this._submit(values))}/>;
    }
}

const validate = (values: LoginFormContainerDataProps): any => {
    const {email, password} = values;
    let errors: LoginFormContainerDataProps = {};
    if (!email) {
        errors.email = 'El correo electrónico es requerido';
    }
    if (!password) {
        errors.password = 'La contraseña es requerida';
    }
    return errors;
};

export function mapStateToProps({login, form}: RootState): LoginFormContainerStateProps {
    const {isLoading, token, user, hasError} = login;

    let loginForm = form[Forms.LOGIN];

    return {
        errors: loginForm && loginForm.syncErrors ? _.values(loginForm.syncErrors) : [],
        token, user, isLoading, hasError,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<LoginAction>): LoginFormContainerDispatchProps {
    return {
        loginCheck: (email: string,
                     password: string,
                     remember: boolean) =>
            dispatch(loginCheck(email, password, remember)),
    };
}

const FormComponent = reduxForm({
    form: Forms.LOGIN,
    validate,
})(LoginFormContainer);

export default (connect(mapStateToProps, mapDispatchToProps)(FormComponent as any));