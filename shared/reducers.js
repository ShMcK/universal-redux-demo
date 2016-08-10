import { combineReducers } from 'redux';
import { default as pokemon } from './modules/pokemon';

const reducers = combineReducers({
  pokemon
});
export default reducers;
