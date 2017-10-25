import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './business/Store';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './semantic/dist/semantic.min.css';

import App from './App';

const store = configureStore();

const rootEl = document.getElementById('root') as HTMLElement;
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl,
);

registerServiceWorker();

// Hot Module Replacement API
// tslint:disable-next-line
declare let module: { hot: any };

// Are we in development mode?
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp/>
            </Provider>,
            rootEl,
        );
    });
}
