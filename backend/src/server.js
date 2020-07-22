var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var generator = require('./generator');
var port = process.env.PORT || 3001;


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

setInterval(() => {
    io.emit('message', generator.generatePart());
}, 10000);