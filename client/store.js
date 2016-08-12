import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import remoteActionMiddleware from './middleware/remote';
import socket from './middleware/socket';
import reducers from '../shared/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk, remoteActionMiddleware(socket))
);
export default store;
