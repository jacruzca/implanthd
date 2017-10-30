import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './user/pages/LoginPage';
import { HomePage } from './home/pages/HomePage';
import { HOME, LOGIN, PROFILE, SIGN_UP } from './constants/routes';
import SignUpPage from './user/pages/SignUpPage';
import ProfilePage from './user/pages/ProfilePage';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path={HOME} component={HomePage}/>
                        <Route exact={true} path={LOGIN} component={LoginPage}/>
                        <Route exact={true} path={SIGN_UP} component={SignUpPage}/>
                        <Route exact={true} path={PROFILE} component={ProfilePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
