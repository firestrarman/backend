import reducers from "js/redux/reducer";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import createLogger from 'redux-logger';

import rootSagas from 'js/sagas/';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middleware = __DEVELOPMENT__ ? [sagaMiddleware, logger] : [sagaMiddleware];
const createStoreWithMiddleware = createStore(combineReducers(reducers), {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSagas);

export default createStoreWithMiddleware;
