import * as React from 'react';

import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import SideBarComponent from '../../home/components/SideBarComponent';
import { UserAction, userCheck } from '../../business/user/actions/UserActions';
import { UserStoreState } from '../../business/user/types/UserTypes';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getUser, setUser } from '../../core/util/CacheUtil';
import { editImageProfile, EditUserAction } from '../../business/user/actions/EditUserActions';
import { EditUserStoreState } from '../../business/user/types/EditUserTypes';

type StoreState = UserStoreState & EditUserStoreState;

interface ProfileFormContainerStateProps extends StoreState {
    errors?: Array<string>;
    history?: any;
}

interface ProfileFormContainerDispatchProps {
    userCheck: (id: string) => any;
    editImageProfile: (id: string, image: any) => any;
}

type ProfileFormContainerProps =
    ProfileFormContainerStateProps &
    ProfileFormContainerDispatchProps;

class ProfilePage extends React.Component<ProfileFormContainerProps, {}> {

    componentWillMount() {
        const user = getUser();
        this.props.userCheck(user._id);
    }

    componentWillReceiveProps(nextProps: ProfileFormContainerProps) {
        if (!this.props.successEditProfileImage && nextProps.successEditProfileImage) {
            window.location.reload();
        }
    }

    uploadCallback = (image: any) => {
        const user = getUser();
        this.props.editImageProfile(user._id, image);
    }

    render() {

        const {isLoading, user} = this.props;

        if (isLoading) {
            return (
                <SideBarComponent history={this.props.history}>
                    <Dimmer active={true}>
                        <Loader/>
                    </Dimmer>
                </SideBarComponent>
            );
        }

        setUser(user);

        return (
            <SideBarComponent history={this.props.history}>
                <ProfileComponent user={user} uploadCallback={this.uploadCallback}/>
            </SideBarComponent>
        );
    }
}

export function mapStateToProps({user: userRoot, profile}: RootState): ProfileFormContainerStateProps {
    const {isLoading, user, errorMessage, success} = userRoot;
    const {successEditProfileImage} = profile;

    return {
        user, isLoading, errorMessage, success, successEditProfileImage,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<UserAction | EditUserAction>): ProfileFormContainerDispatchProps {
    return {
        userCheck: (id: string) => dispatch(userCheck(id)),
        editImageProfile: (id: string, image: any) => dispatch(editImageProfile(id, image)),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ProfilePage as any));