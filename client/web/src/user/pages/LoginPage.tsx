import * as React from 'react';
import * as _ from 'lodash';
import * as Cookies from 'js-cookie';
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

interface LoginFormContainerDataProps {
    email?: string;
    password?: string;
    rememberPassword?: boolean;
}

interface LoginFormContainerStateProps extends LoginStoreState {
    errors?: Array<string>;
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

    _submit = (values: Partial<LoginFormContainerDataProps>) => {
        if (values.email && values.password) {
            this.props.loginCheck(values.email, values.password, values.rememberPassword);
        }
    }

    redirectToHome() {
        return (
            <Redirect to={HOME}/>
        );
    }

    showErrorModal() {
        alert('Credenciales inválidas');
    }

    render() {

        const {handleSubmit, errors, isLoading, invalid, submitFailed, user, token, hasError} = this.props;

        const savedUser = Cookies.get(USER_COOKIE);
        const savedToken = Cookies.get(TOKEN_COOKIE);

        if (hasError) {
            this.showErrorModal();
        }

        if (savedToken && savedUser) { // already logged in
            return this.redirectToHome();
        }

        if (user && token) { // login success
            Cookies.set(USER_COOKIE, user);
            Cookies.set(TOKEN_COOKIE, token);
            return this.redirectToHome();
        }

        const formProps = {
            invalid,
            submitFailed,
            errors,
            isLoading,
        };

        return (
            <LoginComponent {...formProps} handleSubmit={handleSubmit(values => this._submit(values))}/>
        );
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