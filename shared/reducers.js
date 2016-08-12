import { combineReducers } from 'redux';
import { default as pokemon } from './modules/pokemon';
import { default as clientId } from './modules/clientId';
// import { default as connection } from './modules/connection';

export default combineReducers({
  pokemon, clientId
});
