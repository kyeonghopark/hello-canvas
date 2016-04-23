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


var onTextColorRequest = function(socketsAll, socket, msg) {
  var kColors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple'];

  var nextColor = kColors[0];
  var currentIndex = kColors.indexOf(msg.currentColor);
  if (currentIndex >= 0) {
    nextColor = kColors[(currentIndex + 1) % kColors.length];
  }

  socket.send({
    protocol: 'TextColorResponse',
    textColor: nextColor
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
    TextColorRequest: onTextColorRequest,
    Bye: onBye
  }
};
