import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { LoginPage } from './user/pages/LoginPage';
import { HomePage } from './home/pages/HomePage';
import { HOME, LOGIN } from './constants/routes';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path={HOME} component={HomePage}/>
                        <Route exact={true} path={LOGIN} component={LoginPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
