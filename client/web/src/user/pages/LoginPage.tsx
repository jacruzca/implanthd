import * as React from 'react';
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
        return <LoginComponent handleSubmit={this.props.handleSubmit(values => this._submit(values))}/>;
    }
}

export function mapStateToProps({login}: RootState): LoginFormContainerStateProps {

    const {isLoading} = login;

    return {
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
})(LoginFormContainer);

export default (connect(mapStateToProps, mapDispatchToProps)(FormComponent as any));