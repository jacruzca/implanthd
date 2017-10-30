import * as React from 'react';

import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import { SignUpStoreState } from '../../business/user/types/SignUpTypes';
import { SignUpAction, signUpCheck } from '../../business/user/actions/SignUpActions';
import ProfileComponent from '../components/ProfileComponent';
import SideBarComponent from '../../home/components/SideBarComponent';

interface SignUpFormContainerStateProps extends SignUpStoreState {
    errors?: Array<string>;
}

interface SignUpFormContainerDispatchProps {
    signUpCheck: (email: string,
                  password: string) => any;
}

type SignUpFormContainerProps =
    SignUpFormContainerStateProps &
    SignUpFormContainerDispatchProps;

class ProfilePage extends React.Component<SignUpFormContainerProps, {}> {

    render() {

        return (
            <SideBarComponent>
                <ProfileComponent/>
            </SideBarComponent>
        );
    }
}

export function mapStateToProps({user: userRoot}: RootState): SignUpFormContainerStateProps {
    const {isLoading, user, errorMessage} = userRoot;

    return {
        user, isLoading, errorMessage,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SignUpAction>): SignUpFormContainerDispatchProps {
    return {
        signUpCheck: (email: string,
                      password: string) =>
            dispatch(signUpCheck(email, password)),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ProfilePage as any));