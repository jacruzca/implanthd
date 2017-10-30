import * as React from 'react';
import { Card, CardItem, Button, Container, Header, Content, Form, Item, Input, Icon } from 'native-base';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Field } from 'redux-form';
import { InputComponent } from '../../core/components/FormComponents';
import { SIGN_UP } from '../../constants/routes';

const logo = require('../../resources/images/logo.png');
const background = require('../../resources/images/login_background.jpg');

interface LoginComponentProps {
    errors?: Array<string>; // global errors of the form
    handleSubmit: (values: any) => void;
    isLoading?: boolean;
    submitFailed?: boolean;
    touched?: boolean;
    invalid?: boolean;
    history: any;
}

const renderBackImage = () => {

    return (
        <Image source={background}
               style={styles.backgroundImage} resizeMode={'cover'}/>
    );

};

const LoginComponent: React.ComponentType<LoginComponentProps> = (props: LoginComponentProps) => {

    return (
        <Container>
            <Header/>
            {renderBackImage()}
            <Content contentContainerStyle={{padding: 10}}>
                <View style={styles.mainView}>
                    <Image source={logo} style={styles.logoStyle}/>
                </View>
                <View style={styles.mainView}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10}}>
                        Iniciar sesión
                    </Text>
                    <Field name='email' component={InputComponent}
                           {...{
                               icon: 'mail',
                               keyboardType: 'email-address',
                               autoCapitalize: 'none',
                               clearButtonMode: 'always',
                               placeholder: 'Correo electrónico',
                               placeholderTextColor: 'white',
                               style: {color: 'white'},
                           }}/>
                    <Field name='password' component={InputComponent}
                           {...{
                               icon: 'lock',
                               placeholder: 'Contraseña',
                               placeholderTextColor: 'white',
                               secureTextEntry: true,
                               style: {color: 'white'},
                           }}/>

                    <Button block light style={{marginTop: 30}} onPress={props.handleSubmit}>
                        <Text>Iniciar sesión</Text>
                    </Button>
                </View>

                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>

                <Button iconLeft light full style={{marginTop: 50}} onPress={() => {
                    props.history.replace(SIGN_UP);
                }}>
                    <Icon name='ios-person-add' style={{fontSize: 29, paddingRight: 20}}/>
                    <Text>¿No tienes una cuenta?</Text>
                </Button>
            </Content>
        </Container>
    );
};

export default LoginComponent;

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    logoStyle: {
        width: 150,
        height: 150,
    },
    errorTitle: {
        color: 'red',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
    },
    forgotPasswordText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 30,
    },
});