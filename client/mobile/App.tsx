/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { HomePage } from './src/home/pages/HomePage';
import { HOME, LOGIN } from './src/constants/routes';
import { StyleSheet, View } from 'react-native';
import LoginComponent from './src/user/components/LoginComponent';

export default class App extends React.Component<{}> {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path={HOME} component={HomePage}/>
                    <Route exact path={LOGIN} component={LoginComponent}/>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});