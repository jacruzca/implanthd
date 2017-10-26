import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import LoginComponent from '../components/LoginComponent';

import { RootState } from '../../business/Reducers';
import { LoginAction } from '../../business/user/actions/LoginActions';
import { connect, Dispatch } from 'react-redux';

interface LoginFormContainerProps {
}

class LoginFormContainer extends React.Component<InjectedFormProps<LoginFormContainerProps>, {}> {

    _submit = (values: Partial<LoginFormContainerProps>) => {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    alert(`Submit : ${JSON.stringify(values, null, 2)}`);
                    resolve();
                },
                1000);
        });
    }

    render() {
        return <LoginComponent handleSubmit={this.props.handleSubmit(values => this._submit(values))}/>;
    }
}

export function mapStateToProps({login}: RootState) {
    return {};
}

export function mapDispatchToProps(dispatch: Dispatch<LoginAction>) {
    return {};
}

export default (connect(mapStateToProps, mapDispatchToProps)(reduxForm<LoginFormContainerProps>({
    form: 'login',
})(LoginFormContainer)));