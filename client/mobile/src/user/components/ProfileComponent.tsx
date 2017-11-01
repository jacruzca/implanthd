import * as React from 'react';

import { Link } from 'react-router-native';
import { EDIT_PROFILE, HOME } from '../../constants/routes';
import { Image, StyleSheet, Text } from 'react-native';
import {
    Container, Header, Content,
    List, ListItem, Title, Body,
    Left, Right, Button, Icon,
} from 'native-base';

const userImage = require('../../resources/images/user_default.png');

interface ProfileComponentProps {
    errors?: Array<string>; // global errors of the form
    isLoading?: boolean;
    errorMessage?: string;
    user?: any;
    history?: any;
}

const renderProfileImage = (user?: any) => {
    if (user && user.profileImage) {
        return (
            <Image source={user.profileImage}/>
        );
    }

    return (
        <Image source={userImage}/>
    );
};

const ProfileComponent: React.ComponentType<ProfileComponentProps> = (props) => {

    const {user} = props;

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.history.replace(HOME)}>
                        <Icon name='ios-arrow-back'/>
                    </Button>
                </Left>
                <Body>
                <Title>Perfil</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => props.history.push(EDIT_PROFILE)}>
                        <Icon name='ios-build'/>
                    </Button>
                </Right>
            </Header>
            <Content>
                <ListItem>
                    <Body>
                    <Text style={styles.title}>Nombre</Text>
                    <Text>{user && user.firstName} {user && user.lastName}</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Body>
                    <Text style={styles.title}>E-mail</Text>
                    <Text>{user && user.email}</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Body>
                    <Text style={styles.title}>Género</Text>
                    <Text>{user && user.gender}</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Body>
                    <Text style={styles.title}>Dirección</Text>
                    <Text>{user && user.address}, {user && user.city}, {user && user.country}</Text>
                    </Body>
                </ListItem>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})

export default ProfileComponent;