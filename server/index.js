const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

require('./middleware')(app);
require('./routes')(app);
require('./server')(app);
