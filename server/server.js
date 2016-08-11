const http = require('http');

module.exports = function(app) {
  const server = http.createServer(app);

  require('./ws').createWS(server);

  server.listen(3000, () => {
    console.log('Server listening on port 3000...');
  });
}
