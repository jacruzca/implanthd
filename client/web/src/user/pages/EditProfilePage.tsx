import * as React from 'react';
import * as Forms from '../../constants/forms';
import * as _ from 'lodash';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import SideBarComponent from '../../home/components/SideBarComponent';
import { UserAction, userCheck } from '../../business/user/actions/UserActions';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getUser } from '../../core/util/CacheUtil';
import { editUser } from '../../business/user/actions/EditUserActions';
import EditProfileComponent from '../components/EditProfileComponent';
import { EditUserStoreState } from '../../business/user/types/EditUserTypes';
import { PROFILE } from '../../constants/routes';

interface EditProfileFormContainerDataProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    history?: any;
}

interface EditProfileFormContainerStateProps extends EditUserStoreState {
    history?: any;
    initialValues?: any;
    isProfessional: boolean;
    errors?: Array<string>;
    isProfileLoading: boolean;
}

interface EditProfileFormContainerDispatchProps {
    userCheck: (id: string) => any;
    editUser: (id: string, user: object) => any;
}

type EditProfileFormContainerProps =
    EditProfileFormContainerDataProps &
    EditProfileFormContainerStateProps &
    EditProfileFormContainerDispatchProps &
    InjectedFormProps;

class EditProfilePage extends React.Component<EditProfileFormContainerProps, {}> {

    _submit = (values: Partial<EditProfileFormContainerDataProps>) => {
        if (this.props.user) {
            console.log(values);
            this.props.editUser(this.props.user._id, values);
        }
    }

    componentWillMount() {
        if (!this.props.user) {
            const user = getUser();
            this.props.userCheck(user._id);
        }
    }

    render() {

        const {
            handleSubmit, errors, isLoading,
            invalid, submitFailed, user,
            errorMessage, isProfessional, success,
            isProfileLoading,
        } = this.props;

        if (success) {
            this.props.history.push(PROFILE);
            return <div/>;
        }

        if (isLoading) {
            return (
                <SideBarComponent history={this.props.history}>
                    <Dimmer active={true}>
                        <Loader/>
                    </Dimmer>
                </SideBarComponent>
            );
        }

        const formProps = {
            isProfileLoading,
            isProfessional,
            invalid,
            submitFailed,
            errors,
            isLoading,
        };

        return (
            <SideBarComponent history={this.props.history}>
                <EditProfileComponent
                    {...formProps}
                    errorMessage={errorMessage}
                    handleSubmit={handleSubmit(values => this._submit(values))}
                    user={user}
                />
            </SideBarComponent>
        );
    }
}

const validate = (values: EditProfileFormContainerProps): any => {
    const {email} = values;
    let errors: EditProfileFormContainerDataProps = {};
    if (!email) {
        errors.email = 'El correo electrónico es requerido';
    }
    return errors;
};

export function mapStateToProps(state: RootState): EditProfileFormContainerStateProps {
    const {user: userRoot, profile, form} = state;
    const selector = formValueSelector(Forms.PROFILE); // <-- same as form name
    const isProfessional = selector(state, 'isProfessional');
    const {isLoading, user, errorMessage} = userRoot;
    const {isLoading: isProfileLoading} = profile;

    let profileForm = form[Forms.PROFILE];

    let ret = {
        errors: profileForm && profileForm.syncErrors ? _.values(profileForm.syncErrors) : [],
        user, isLoading, errorMessage, isProfileLoading, isProfessional,
        initialValues: user,
    };

    return ret;
}

export function mapDispatchToProps(dispatch: Dispatch<UserAction>): EditProfileFormContainerDispatchProps {
    return {
        userCheck: (id: string) => dispatch(userCheck(id)),
        editUser: (id: string, user: object) => dispatch(editUser(id, user)),
    };
}

let FormComponent = reduxForm({
    form: Forms.PROFILE,
    validate,
})(EditProfilePage as any);

export default (connect(mapStateToProps, mapDispatchToProps)(FormComponent as any));