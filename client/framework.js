'use strict';


var nextTimeout = 0;  // millisec


canvas.onmousedown = function(evt) {
  var pos = {
    x: evt.offsetX,
    y: evt.offsetY
  };
  console.info({ mouse: pos });
  app.onMouse(pos);
};


window.onkeydown = function(evt) {
  var key = evt.keyCode;
  console.info({ key: key });
  app.onKey(key);
};


var initialize = function() {
  nextTimeout = 100;
  app.initialize();
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
