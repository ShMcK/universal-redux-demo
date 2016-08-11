const http = require('http');
const createWS = require('./ws');

module.exports = function(app) {
  const server = http.createServer(app);

  createWS(server);

  server.listen(3000, () => {
    console.log('Server listening on port 3000...');
  });
}
