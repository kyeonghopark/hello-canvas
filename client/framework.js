'use strict';


var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
var nextTimeout = 0;  // millisec


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
