import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './reducers';

const middleware = applyMiddleware(promise(),thunk);
const store = createStore(reducer,middleware);
export const myHistory = syncHistoryWithStore(browserHistory,store);
export default store;