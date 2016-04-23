'use strict';


var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var socket = io('localhost:1337');
