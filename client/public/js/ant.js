document.addEventListener("DOMContentLoaded", function() {
    drawBorder();
});

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size;
var angle = 0;
var imgAnt;
var imgGun;
var imgAnts;
var x = 0;
var y = 0;
var noOfAnts = 10;
var fallingAnts = [];

setup();


function drawBorder() {
    var size = {
        x: canvas.width,
        y: canvas.height
    };
    //have to set colors etc before it is drawn
    context.strokeStyle = 'black';
    //takes 4 parameters
    context.strokeRect(0, 0, size.x, size.y);
}

function setup() {
    imgBackground = new Image();
    imgBackground.src = "../images/background.png";

    imgGun = new Image();
    imgGun.src = "../images/gun.png";


    for (var i = 0; i < noOfAnts; i++) {
        var fallingAnt = {};
        fallingAnt.image = new Image();
        fallingAnt.image.src = '../images/ant.png';

        fallingAnt.x = Math.random() * 800;
        fallingAnt.y = -20;

        fallingAnt.speed = 1 + Math.random() * 5;
        fallingAnts.push(fallingAnt);

    }
    //request animation frame
    setInterval(function() {
      context.save();
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();
      drawGun();
      drawAnts();
      drawRectangle();

      context.restore();
  }, 45);
}


function drawBackground() {
    context.drawImage(imgBackground, 0, 0); //Background
}

function drawAnts() {
    for (var i = 0; i < noOfAnts; i++) {
        context.drawImage(fallingAnts[i].image, fallingAnts[i].x, fallingAnts[i].y, 25, 60); //The rain ants

        fallingAnts[i].y += fallingAnts[i].speed; //Set the falling speed

        if (fallingAnts[i].y > 450) { //Repeat the raindrop when it falls out of view

            fallingAnts[i].y = -120; //Account for the image size
        }
    }
}

function drawRectangle() {
    context.translate(331, 490);
    context.rotate(Math.PI / 180 * (angle));
    context.strokeRect(0, 20, 4, 80);
}


function drawGun() {
    //reg size 8, 80
    context.drawImage(imgGun, 331, 402, 8, 80);

}

//gun control
document.onkeydown = function(e) {
  var event = window.event ? window.event : e;

  if (e.keyCode == '37') {
     angle -= 5;
  }
  else if (e.keyCode == '39') {
     angle += 5;
  }
};


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
//     speed: 5,
//     x: 20,
//     y: 20,
// };



// imgGun.angle += (Math.PI*2) / 100;
// var x = imgGun.x + imgGun.h * Math.cos(imgGun.angle);
// var y = imgGun.y + imgGun.length * Math.sin(imgGun.angle);

// Space key - to shoot bullet

// detect collision bullet with ant and make dissapear (eventually make it explode then disappear)

// add points for every shot

// add life for every blue ant recruited

// once life runs out -Game over- record points


//add complexity to ants (array of images to appear as if it is crawling)
// and random dihillion diagonal

//increment more ants as more points are earned
