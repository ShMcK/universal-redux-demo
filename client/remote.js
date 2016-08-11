const host = window.document.location.host.replace(/:.*/, '');
const ws = new WebSocket('ws://' + host + ':3000');

let connected = false;

ws.onopen = () => {
  console.log('socket connected');
  connected = true;
};

ws.onclose = () => {
  connected = false;
  console.log('closing');
};
ws.onerror = (err) => {
  console.log(err);
};

ws.onmessage = (data) => {
  console.log(data);
};

// remove action middleware;
const remoteActionMiddleware = store => next => action => {
  if (action.meta && action.meta.remote) {
    if (connected) {
      console.log('send', action);
      ws.send(JSON.stringify(action));
    }
    // ws.send(action)
  }
  return next(action);
}
export default remoteActionMiddleware;
