'use strict';


var app = {};


app.drawScreen = function() {
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.fill();
};
