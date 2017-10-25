import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './Reducers';

export function configureStore(initialState?: RootState) {

    let middleware = applyMiddleware(createLogger());

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    if (module.hot) {
        module.hot.accept('./Reducers', () => {
            const nextReducer = require('./Reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}