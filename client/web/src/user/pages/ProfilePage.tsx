import * as React from 'react';

import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import SideBarComponent from '../../home/components/SideBarComponent';
import { UserAction, userCheck } from '../../business/user/actions/UserActions';
import { UserStoreState } from '../../business/user/types/UserTypes';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getUser } from '../../core/util/CacheUtil';

interface ProfileFormContainerStateProps extends UserStoreState {
    errors?: Array<string>;
}

interface ProfileFormContainerDispatchProps {
    userCheck: (id: string) => any;
}

type ProfileFormContainerProps =
    ProfileFormContainerStateProps &
    ProfileFormContainerDispatchProps;

class ProfilePage extends React.Component<ProfileFormContainerProps, {}> {

    componentWillMount() {
        if (!this.props.user) {
            const user = getUser();
            this.props.userCheck(user._id);
        }
    }

    render() {

        const {isLoading, user} = this.props;

        if (isLoading) {
            return (
                <SideBarComponent>
                    <Dimmer active>
                        <Loader/>
                    </Dimmer>
                </SideBarComponent>
            );
        }

        return (
            <SideBarComponent>
                <ProfileComponent user={user}/>
            </SideBarComponent>
        );
    }
}

export function mapStateToProps({user: userRoot}: RootState): ProfileFormContainerStateProps {
    console.log(userRoot);
    const {isLoading, user, errorMessage} = userRoot;

    return {
        user, isLoading, errorMessage,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<UserAction>): ProfileFormContainerDispatchProps {
    return {
        userCheck: (id: string) => dispatch(userCheck(id)),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ProfilePage as any));