import Server from 'socket.io';
import store from './store';

module.exports = function startSocketServer() {
  const io = new Server().attach(3030);

  store.subscribe(() => io.emit('state', store.getState()));

  io.on('connection', (socket) => {
    console.log('socket connected');

    // seed client
    socket.emit('state', store.getState());

    socket.on('action', (action) => {
      console.log(action);
      store.dispatch.bind(store)(action);
      socket.emit('state', store.getState());
    });

    socket.on('disconnect', () => {
      console.log('socket disconnected');
    });
  });

}
