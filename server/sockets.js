import store from './store';
let connected = false;

module.exports = function sockets(socket) {
  socket.on('open', () => {
    connected = true;
    console.log('connected');
  });

  socket.on('close', () => {
    connected = false;
    console.log('disconnected');
  });

  socket.on('message', (data) => {
    console.log(data);
    try {
      const action = JSON.parse(data);
      if (action.hasOwnProperty('type')) {
        store.dispatch(action);
      }
    } catch (msg) {
      console.log(msg)
    }
  });
}
