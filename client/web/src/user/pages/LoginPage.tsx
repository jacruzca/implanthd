import * as React from 'react';
import * as _ from 'lodash';
import { InjectedFormProps, reduxForm } from 'redux-form';
import LoginComponent from '../components/LoginComponent';

import { RootState } from '../../business/Reducers';
import { LoginAction, loginCheck } from '../../business/user/actions/LoginActions';
import { connect, Dispatch } from 'react-redux';
import { LoginStoreState } from '../../business/user/types/LoginTypes';

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

    render() {

        const {handleSubmit, errors, isLoading} = this.props;

        const formProps = {
            errors,
            submitting: isLoading,
        };

        return <LoginComponent {...formProps} handleSubmit={handleSubmit(values => this._submit(values))}/>;
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
    const {isLoading} = login;

    return {
        errors: form.login && form.login.syncErrors ? _.values(form.login.syncErrors) : [],
        isLoading,
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
    form: 'login',
    validate,
})(LoginFormContainer);

export default (connect(mapStateToProps, mapDispatchToProps)(FormComponent as any));