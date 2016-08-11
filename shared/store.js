import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import remoteActionMiddleware from '../client/middleware';

const buildStore = (name) => {
  switch (name) {
    case 'client':
      const logger = createLogger();
      return createStore(reducers, applyMiddleware(thunk, remoteActionMiddleware, logger));
    case 'server':
      return createStore(reducers, applyMiddleware(thunk));
  }
}

export default buildStore;
