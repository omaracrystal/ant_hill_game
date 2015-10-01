var ctx;
var imgAnt;
var imgGun;
var imgAnts;
var x = 0;
var y = 0;
var noOfAnts = 10;
var fallingAnts = [];

setup();

function setup() {
  var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    imgBackground = new Image();
    imgBackground.src = "../images/background.png";

    imgGun = new Image();
    imgGun.src = "../images/gun.png";
  //draw ant every 45 milliseconds
  setInterval(draw, 45);

  for (var i = 0; i < noOfAnts; i++) {
    var fallingAnt = {};
    fallingAnt.image =  new Image();
    fallingAnt.image.src = '../images/ant.png';

    fallingAnt.x = Math.random() * 800;
    fallingAnt.y = -20;

    fallingAnt.speed = 1 + Math.random() * 5;
    fallingAnts.push(fallingAnt);

  }
}

function draw() {
  drawBackground();
  drawGun();
  drawAnts();
}

function drawBackground(){
    ctx.drawImage(imgBackground, 0, 0); //Background
}

function drawGun() {
  //reg size 8, 80
  ctx.drawImage(imgGun, 331, 402);
}

// function gunControl(){
('#canvas').on('keypress', gunControl());

function gunControl() {
    console.log('hit');
    // gun.angle += (Math.PI*2) / 100;
    // var x = gun.x + gun.length * Math.cos(gun.angle);
    // var y = gun.y + gun.length * Math.sin(gun.angle);
}

function drawAnts() {
  for (var i=0; i< noOfAnts; i++) {
    ctx.drawImage (fallingAnts[i].image, fallingAnts[i].x, fallingAnts[i].y, 25, 60); //The rain ants

    fallingAnts[i].y += fallingAnts[i].speed; //Set the falling speed

    if (fallingAnts[i].y > 450) {  //Repeat the raindrop when it falls out of view

      fallingAnts[i].y = -120; //Account for the image size
    }
  }
}




////////////////* STEPS *////////////////
// detect collision with other ants (make smaller)
/*
1. generate random number
1. ensure random number is not already used (fallingAnts.x)
1. if random number is not used then assign it to new x coordinate, otherwise create new random number (loop until a random number is assigned)

 */

// detect collision with ant hill and stop


// life goes down once the ant stops at hill


// Left and Right arrow keys - can you rotate the gun? or flip through array of pics
// var gun = {
//   x: 335,
//   y: 480,
//   length: 100,
//   angle: 0
// };

gun.angle += (Math.PI*2) / 100;
var x = gun.x + gun.length * Math.cos(gun.angle);
var y = gun.y + gun.length * Math.sin(gun.angle);

// Space key - to shoot bullet

// detect collision bullet with ant and make dissapear (eventually make it explode then disappear)

// add points for every shot

// add life for every blue ant recruited

// once life runs out -Game over- record points


//add complexity to ants (array of images to appear as if it is crawling)
// and random dihillion diagonal

//increment more ants as more points are earned



