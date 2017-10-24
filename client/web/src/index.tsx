import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import {enthusiasm} from './reducers/index';
import {StoreState} from './types/index';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './semantic/dist/semantic.min.css';
// import Hello from './containers/Hello';
import App from './App';
import {Provider} from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
