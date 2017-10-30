import * as React from 'react';
import * as _ from 'lodash';
import * as Cookies from 'js-cookie';
import * as Forms from '../../constants/forms';
import { InjectedFormProps, reduxForm } from 'redux-form';
import SignUpComponent from '../components/SignUpComponent';

import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';
import { HOME } from '../../constants/routes';
import { Redirect } from 'react-router';
import { SignUpStoreState } from '../../business/user/types/SignUpTypes';
import { SignUpAction, signUpCheck } from '../../business/user/actions/SignUpActions';

interface SignUpFormContainerDataProps {
    email?: string;
    password?: string;
    passwordConfirm?: string;
}

interface SignUpFormContainerStateProps extends SignUpStoreState {
    errors?: Array<string>;
}

interface SignUpFormContainerDispatchProps {
    signUpCheck: (email: string,
                  password: string) => any;
}

type SignUpFormContainerProps =
    SignUpFormContainerDataProps &
    SignUpFormContainerStateProps &
    SignUpFormContainerDispatchProps &
    InjectedFormProps;

class SignUpFormContainer extends React.Component<SignUpFormContainerProps, {}> {

    _submit = (values: Partial<SignUpFormContainerDataProps>) => {
        if (values.email && values.password) {
            this.props.signUpCheck(values.email, values.password);
        }
    }

    redirectToHome() {
        return (
            <Redirect to={HOME}/>
        );
    }

    render() {

        const {handleSubmit, errors, isLoading, invalid, submitFailed, user, token, errorMessage} = this.props;

        const savedUser = Cookies.get(USER_COOKIE);
        const savedToken = Cookies.get(TOKEN_COOKIE);

        if (savedToken && savedUser) { // already logged in
            return this.redirectToHome();
        }

        if (user && token) { // signup success
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
            <SignUpComponent
                {...formProps}
                errorMessage={errorMessage}
                handleSubmit={handleSubmit(values => this._submit(values))}
            />
        );
    }
}

const validate = (values: SignUpFormContainerDataProps): any => {
    const {email, password, passwordConfirm} = values;
    let errors: SignUpFormContainerDataProps = {};
    if (!email) {
        errors.email = 'El correo electrónico es requerido';
    }
    if (!password) {
        errors.password = 'La contraseña es requerida';
    }

    if (!passwordConfirm || passwordConfirm !== password) {
        errors.passwordConfirm = 'La contraseña no coincide';
    }
    return errors;
};

export function mapStateToProps({signUp, form}: RootState): SignUpFormContainerStateProps {
    const {isLoading, token, user, errorMessage} = signUp;

    let signUpForm = form[Forms.SIGNUP];

    return {
        errors: signUpForm && signUpForm.syncErrors ? _.values(signUpForm.syncErrors) : [],
        token, user, isLoading, errorMessage,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SignUpAction>): SignUpFormContainerDispatchProps {
    return {
        signUpCheck: (email: string,
                      password: string) =>
            dispatch(signUpCheck(email, password)),
    };
}

const FormComponent = reduxForm({
    form: Forms.SIGNUP,
    validate,
})(SignUpFormContainer);

export default (connect(mapStateToProps, mapDispatchToProps)(FormComponent as any));