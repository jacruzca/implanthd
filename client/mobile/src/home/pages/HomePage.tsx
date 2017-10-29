import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { LOGIN } from '../../constants/routes';

export interface Props {
    name: string;
}

export class HomePage extends React.Component<Props, {}> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Home MOBILE!</Text>
                <Link to={LOGIN}><Text>LOGIN</Text></Link>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});