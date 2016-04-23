'use strict';

// imports
//..


// private variables
var data = null;


// private functions
//..


// public functions
var start = function(dataRef, callback) {
  data = dataRef;
  callback();
};


var onClientDisconnect = function(socketsAll, socket) {
};


var onHello = function(socketsAll, socket, msg) {
  socket.send({
    protocol: 'Hello'
  });
};


var onBye = function(socketsAll, socket, msg) {
  socket.send({
    protocol: 'Bye'
  });
};


// module.exports
module.exports = {
  start: start,
  onClientDisconnect: onClientDisconnect,
  on: {
    Hello: onHello,
    Bye: onBye
  }
};
