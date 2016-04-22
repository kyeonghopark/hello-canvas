'use strict';


var app = {
  pos: {
    x: canvas.width / 2,
    y: canvas.height / 2
  },
  direction: 'none',
  event: 'none',
  tickDisplay: ''
};


var moveApp = function() {
  var posInc = {
    none: {x: 0, y: 0},
    left: { x: -1, y: 0 },
    up: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    down: { x: 0, y: 1 }
  }[app.direction];
  app.pos.x += posInc.x;
  app.pos.y += posInc.y;
};


app.initialize = function() {
};


app.onTick = function(tick) {
  moveApp();
  app.tickDisplay = Math.floor(tick / 100).toString();
};


app.onMouse = function(canvasPos) {
  app.event = 'mouse:' + JSON.stringify(canvasPos);

  app.pos.x = canvasPos.x;
  app.pos.y = canvasPos.y;
};


app.onKey = function(key) {
  app.event = 'key:' + key.toString();

  switch (key) {
    case 37: app.direction = 'left'; break;
    case 38: app.direction = 'up'; break;
    case 39: app.direction = 'right'; break;
    case 40: app.direction = 'down'; break;
    default: app.direction = 'none'; break;
  }
};


app.drawScreen = function() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'red';
  context.fillText(app.event, app.pos.x, app.pos.y);

  context.fillStyle = 'blue';
  context.fillText(app.tickDisplay, 10, 10);
};
