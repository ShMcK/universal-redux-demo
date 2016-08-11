import store from './store';
const WebSocketServer = require('ws').Server;

let connected = false;
let socket = null;

export function createWS(server) {
  const wss = new WebSocketServer({ server: server });

  wss.on('connection', (ws) => {

    socket = ws;

    ws.on('open', () => {
      connected = true;
      console.log('connected');
    });

    ws.on('close', () => {
      connected = false;
      console.log('disconnected');
    });

    ws.on('message', (data) => {
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

  });
}

export const syncClientMiddleware = store => next => action => {
  socket.send(JSON.stringify(`{ type: 'SET_STATE', payload: { store: ${store} }`))
  return next(action);
};
