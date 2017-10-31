import * as React from 'react';
import { Grid, Image, Segment, Button } from 'semantic-ui-react';

import './ProfileComponent.css';
import { Link } from 'react-router-dom';
import { EDIT_PROFILE } from '../../constants/routes';

const userImage = require('../../resources/images/user_default.png');

interface ProfileComponentProps {
    errors?: Array<string>; // global errors of the form
    isLoading?: boolean;
    errorMessage?: string;
    user?: any;
}

const renderProfileImage = (user?: any) => {
    if (user && user.profileImage) {
        return (
            <Image src={user.profileImage} avatar={true}/>
        );
    }

    return (
        <Image size="small" src={userImage} avatar={true}/>
    );
};

const ProfileComponent: React.ComponentType<ProfileComponentProps> = (props) => {

    const {user} = props;

    return (
        <Grid columns={2} container={true} stackable={true}>
            <Grid.Column width={4}>
                <Segment>
                    {renderProfileImage(user)}
                </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
                <Segment>
                    <Grid columns={2} container={true} divided={'vertically'}>
                        <Grid.Row>
                            <Grid.Column width={16} textAlign="right">
                                <Link to={EDIT_PROFILE}><Button>Edit</Button></Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                Nombre
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div>{user && user.email}</div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                E-mail
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div>{user && user.email}</div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default ProfileComponent;