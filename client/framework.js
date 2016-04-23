'use strict';


var nextTimeout = 0;  // millisec


canvas.onmousedown = function(evt) {
  var pos = {
    x: evt.offsetX,
    y: evt.offsetY
  };
  console.info({ mouse: JSON.stringify(pos) });
  app.onMouse(pos);
};


window.onkeydown = function(evt) {
  var key = evt.keyCode;
  console.info({ key: key });
  app.onKey(key);
};


var sendMessage = function(protocol, msg) {
  msg.protocol = protocol;
  socket.send(JSON.stringify(msg));
}


socket.on('connect', function() {
  console.info({ socket: 'connected' });
});

socket.on('message', function(msg) {
  console.info({ message: JSON.stringify(msg) });
  if (!msg.protocol) {
    console.warn({ fail: 'protocol is missing' });
    return;
  }
  app.onMessage(msg.protocol, msg);
});


var initialize = function() {
  nextTimeout = 100;
  app.initialize();
  socket.connect();
};


var startTick = function() {
  var nextTick = 0;
  window.requestAnimationFrame(function onAnimationFrame(tick) {
    if (tick >= nextTick) {
      app.onTick(tick);
      app.drawScreen();
      nextTick = tick + nextTimeout;
    }
    window.requestAnimationFrame(onAnimationFrame);
  });
};


(function() {
  initialize();
  startTick();
})();
