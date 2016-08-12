const http = require('http');
const WebSocketServer = require('ws').Server;
import sockets from './sockets';

module.exports = function(app) {
  const server = http.createServer(app);

  const wss = new WebSocketServer({ server: server });

  wss.on('connection', (ws) => {
    sockets(ws);
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000...');
  });
}
