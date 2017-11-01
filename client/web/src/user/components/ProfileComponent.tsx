import * as React from 'react';
import { Grid, Image, Segment, Button, Icon } from 'semantic-ui-react';

import './ProfileComponent.css';
import { Link } from 'react-router-dom';
import { EDIT_PROFILE } from '../../constants/routes';
import * as Dropzone from 'react-dropzone';

const userImage = require('../../resources/images/user_default.png');

interface ProfileComponentProps {
    errors?: Array<string>; // global errors of the form
    isLoading?: boolean;
    errorMessage?: string;
    user?: any;
    uploadCallback: (image: any) => any;
}

const onDrop = (acceptedFiles: any, uploadCallback?: Function) => {
    if (uploadCallback) {
        uploadCallback(acceptedFiles[0]);
    }
};

const renderProfileImage = (user?: any, uploadCallback?: Function) => {
    if (user && user.profileImage) {
        return (
            <div>
                <Dropzone style={{}} onDrop={(files: any) => onDrop(files, uploadCallback)}>
                    <Icon name="edit" style={{float: 'right'}}/>
                    <Image size="large" src={user.profileImage} avatar={true}/>
                </Dropzone>
            </div>
        );
    }

    return (
        <Image size="small" src={userImage} avatar={true}/>
    );
};

const ProfileComponent: React.ComponentType<ProfileComponentProps> = (props) => {

    const {user, uploadCallback} = props;

    return (
        <Grid columns={2} container={true} stackable={true}>
            <Grid.Column width={4}>
                <Segment textAlign="center">
                    {renderProfileImage(user, uploadCallback)}
                </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
                <Segment>
                    <Grid columns={2} container={true} divided={'vertically'}>
                        <Grid.Row>
                            <Grid.Column width={16} textAlign="right">
                                <Link to={EDIT_PROFILE}><Button>Editar</Button></Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                Nombre
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div>{user && user.firstName} {user && user.lastName}</div>
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
                        <Grid.Row>
                            <Grid.Column width={6}>
                                Género
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div>{user && user.gender}</div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                Dirección
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div>{user && user.address}, {user && user.city}, {user && user.country}</div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default ProfileComponent;