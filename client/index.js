import store from '../shared/store';
import render from './components';
import {voteUp} from '../shared/modules/pokemon';

// Test: dispatch updates votes
store.dispatch(voteUp(2));
store.dispatch(voteUp(2));

render();

console.log('hello!!!!');

const host = window.document.location.host.replace(/:.*/, '');
const ws = new WebSocket('ws://' + host + ':3000');

ws.onopen = () => {
  ws.send('ping');
  console.log('socket connected');
};
ws.onmessage = ({ data }) => {
  ws.send('ping');
  console.log(data);
};
ws.onclose = () => {
  console.log('closing');
};
ws.onerror = (err) => {
  console.log(err);
};
