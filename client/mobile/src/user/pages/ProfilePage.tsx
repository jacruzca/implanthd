import * as React from 'react';

import { RootState } from '../../business/Reducers';
import { connect, Dispatch } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import { UserAction, userCheck } from '../../business/user/actions/UserActions';
import { UserStoreState } from '../../business/user/types/UserTypes';
import { getUser } from '../../core/util/CacheUtil';
import { Container, Header, Content, Spinner } from 'native-base';

interface ProfileFormContainerStateProps extends UserStoreState {
    errors?: Array<string>;
    history?: any;
}

interface ProfileFormContainerDispatchProps {
    userCheck: (id: string) => any;
}

type ProfileFormContainerProps =
    ProfileFormContainerStateProps &
    ProfileFormContainerDispatchProps;

class ProfilePage extends React.Component<ProfileFormContainerProps, {}> {

    async componentWillMount() {
        const user = await getUser();
        this.props.userCheck(user._id);
    }

    render() {

        const {isLoading, user} = this.props;

        if (isLoading) {
            return (
                <Container>
                    <Header/>
                    <Content>
                        <Spinner color='blue'/>
                    </Content>
                </Container>
            );
        }

        return (
            <ProfileComponent user={user} history={this.props.history}/>
        );
    }
}

export function mapStateToProps({user: userRoot}: RootState): ProfileFormContainerStateProps {
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