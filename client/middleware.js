// const host = window.document.location.host.replace(/:.*/, '');
// const ws = new WebSocket('ws://' + host + ':3000');

// ws.onopen = () => {
//   console.log('socket connected');
// };
// ws.onmessage = ({ data }) => {
//   console.log(data);
// };
// ws.onclose = () => {
//   console.log('closing');
// };
// ws.onerror = (err) => {
//   console.log(err);
// };

// remove action middleware;
const remoteActionMiddleware = store => next => action => {
  console.log('action called!', action);
  return next(action);
}
export default remoteActionMiddleware;
