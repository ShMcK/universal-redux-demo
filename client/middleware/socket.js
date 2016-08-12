import io from 'socket.io-client';
// import setConnectionStatus from '../../shared/modules/connection';
import store from '../store';
import { setState } from './set-state';

const socket = io(`${location.protocol}//${location.hostname}:3030`);

socket.on('state', state => {
  store.dispatch(setState(state))
});

export default socket;
