import * as React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {LoginPage} from './user/pages/LoginPage';
import {HomePage} from './home/pages/HomePage';
import {HOME, LOGIN} from './constants/routes';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path={HOME} component={HomePage}/>
                    <Route exact path={LOGIN} component={LoginPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
