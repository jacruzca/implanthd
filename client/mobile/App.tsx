/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/business/Store';
import { NativeRouter, Route } from 'react-router-native';
import HomePage from './src/home/pages/HomePage';
import { HOME, LOGIN, SIGN_UP } from './src/constants/routes';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/user/pages/LoginPage';
import MobileApi from './src/core/api/MobileApi';
import { TOKEN_COOKIE } from './src/constants/index';
import { Store } from 'redux';
import { RootState } from './src/business/Reducers';
import SignUpPage from './src/user/pages/SignUpPage';

export default class App extends React.Component<{}, { storeReady: boolean, token?: string }> {

    store: Store<RootState>;

    constructor(props: {}) {
        super(props);
        this.state = {storeReady: false};
    }

    async componentWillMount() {
        const token = await AsyncStorage.getItem(TOKEN_COOKIE);
        this.setState({token, storeReady: true});
    }


    render() {
        if (!this.state.storeReady) {
            return <View style={styles.container}><Text>Loading ...</Text></View>;
        }

        if (!this.store) {
            this.store = configureStore(new MobileApi(this.state.token));
        }

        return (
            <Provider store={this.store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <Route exact path={HOME} component={HomePage}/>
                        <Route exact path={LOGIN} component={LoginPage}/>
                        <Route exact path={SIGN_UP} component={SignUpPage}/>
                    </View>
                </NativeRouter>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});