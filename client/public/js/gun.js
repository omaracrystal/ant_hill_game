
//circle properties
var bulletX = 200;
var bulletY = 200;
var bulletR = 50;

var canvas;
var ctx;

//array of bullets
var bullets = [];

//bullet constructor
function Bullet (x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
}

//shoot method
function shoot() {
  bullets.push(new Bullet(x+xx, y+yy, xx/50, yy/50));
}

function init() {
  canvas = $('#canvas');
  ctx = canvas.getContext('2d');
  canvas.on('mouseover', ev_mousemove);
  canvas.on('mousedown', ev_mousedown);
  angle = Math.PI * 1.5;
  setInterval(draw, 100);
}

function ev_mousedown (ev) {
  shoot();
}

//x coordinate.layerX
function ev_mousemove (ev) {
  xc = ev.layerX; yc = ev.layerY;
}

function draw () {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

//draw gun nose
ctx.beginPath();
