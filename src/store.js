import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

// const middleware = applyMiddleware(thunk, logger()); // use for dev mode
const middleware = applyMiddleware(thunk); // use for production mode


export default createStore(reducer, middleware);
