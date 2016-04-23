'use strict';


// private variables
var data = null;
var msgHandler = require('./io_modules/message_handler');

var socketIo = require('socket.io')();


// private functions
var onAccept = function(socket) {
  console.info('on accept');
  socket.hello = {};

  //
  socket.on('message', function(msgString) {
    onClientMessage(socket, JSON.parse(msgString));
  });

  //
  socket.on('disconnect', function(msgString) {
    onClientDisconnect(socket, msgString);
  });
};


var onClientMessage = function(socket, msg) {
  console.info({ onClientMessage: msg });
  var protocol = msg.protocol;
  var handler = msgHandler.on[protocol];
  if (!handler) {
    console.warn({ 'onClientMessage: unknown protocol': protocol });
    socket.disconnect();
    return;
  }

  handler(socketIo.sockets, socket, msg);
}


var onClientDisconnect = function(socket, msgString) {
  console.info('on disconnect: ' + msgString);
  msgHandler.onClientDisconnect(socketIo.sockets, socket);
}


// public functions
var start = function(dataRef) {
  socketIo.on('connection', onAccept);
  data = dataRef;
  msgHandler.start(dataRef, function() {
    var socketIoPort = process.env.port || 1337;
    socketIo.listen(socketIoPort);
    console.info('Socket.io starts listening at: ' + socketIoPort);
  });
};


// module.exports
module.exports = {
  start: start
};
