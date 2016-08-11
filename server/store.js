import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../shared/reducers';
import syncClientMiddleware from './sync';

const logger = createLogger();

export default createStore(
  reducers,
  applyMiddleware(thunk, syncClientMiddleware)
);
