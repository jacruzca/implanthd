import { createStore, applyMiddleware, Store, compose, GenericStoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './Reducers';
import sagas from './Sagas';
import createSagaMiddleware from 'redux-saga';

export function configureStore(initialState?: RootState) {

    const sagaMiddleware = createSagaMiddleware();

    const middleware = compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(createLogger()),
    ) as GenericStoreEnhancer;

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./Reducers', () => {
            const nextReducer = require('./Reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}