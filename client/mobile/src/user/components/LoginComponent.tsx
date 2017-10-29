import * as React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';

const logo = require('../../resources/images/logo.png');
const background = require('../../resources/images/login_background.jpg');

interface LoginComponentProps {
    errors?: Array<string>; // global errors of the form
    handleSubmit: (values: any) => void;
    isLoading?: boolean;
    submitFailed?: boolean;
    touched?: boolean;
    invalid?: boolean;
}

const showErrors = (errors?: Array<string>): JSX.Element | void => {
    if (errors && errors.length > 0) {
        return (
            <View>
                <Text style={styles.errorTitle}>Hay algunos errores</Text>
                {errors.map((err, i) => {
                    return <Text style={styles.error}>err</Text>;
                })}
            </View>
        );
    }
};

const renderBackImage = () => {

    return (
        <Image source={background}
               style={styles.backgroundImage} resizeMode={'cover'}/>
    );

};

const LoginComponent: React.ComponentType<LoginComponentProps> = (props) => {
    return (
        <View style={styles.rootView}>
            {renderBackImage()}
            <Image source={logo} style={styles.logoStyle}/>
        </View>
    );
};

export default LoginComponent;

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        alignItems: 'center',
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
});