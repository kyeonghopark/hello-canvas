'use strict';


var app = {
  tickDisplay: ''
};


app.initialize = function() {
};


app.onTick = function(tick) {
  app.tickDisplay = Math.floor(tick / 100).toString();
};


app.drawScreen = function() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'blue';
  context.fillText(app.tickDisplay, 10, 10);
};
