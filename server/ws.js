const WebSocketServer = require('ws').Server;

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
    console.log(data);

    // setTimeout(() => {
    //   ws.send('pong');
    // }, 500);
  });

  });
}
