import { createStore, applyMiddleware, Store, compose, GenericStoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './Reducers';
import sagas from './Sagas';
import createSagaMiddleware from 'redux-saga';
import ApiInterface from './ApiInterface';


export function configureStore(api: ApiInterface, module?: any, initialState?: RootState) {

    const sagaMiddleware = createSagaMiddleware();

    const middleware = compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(createLogger()),
    ) as GenericStoreEnhancer;

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    sagaMiddleware.run(sagas, api);

    if (module && module.hot) {
        module.hot.accept('./Reducers', () => {
            const nextReducer = require('./Reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}