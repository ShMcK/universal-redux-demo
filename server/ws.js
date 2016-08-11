const WebSocketServer = require('ws').Server;
const store = require('./store');

module.exports = function createWS(server) {
  const wss = new WebSocketServer({ server: server });

  wss.on('connection', (ws) => {

  ws.on('open', () => {
    console.log('connected');
    // ws.send('pong');
  });

  ws.on('close', () => {
    console.log('disconnected');
  });

  ws.on('message', (data) => {
    try {
      const action = JSON.parse(data);
      if (action.hasOwnProperty('type')) {
        console.log('action: ', action);
        store.dispatch(action);
      }
    } catch (msg) {
      console.log(msg)
    }
  });

  });
}
