'use strict';


var dataModule = require('./modules/data');
var ioModule = require('./modules/io');


(function(data, io) {
  console.info('Server starts.');
  data.load(function() {
    io.start(data);
  });
})(dataModule, ioModule);
