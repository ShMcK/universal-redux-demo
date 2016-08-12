const express = require('express');
const path = require('path');
const app = express();
var http = require('http').Server(app);

app.use(express.static(path.join(__dirname, '..', 'dist')));

require('./middleware')(app);
require('./socket-server')();

http.listen(3000, () => {
  console.log('Listening on port 3000...');
});
