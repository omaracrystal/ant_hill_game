var ctx;
var imgBg;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 5;
var fallingDrops = [];

setup();


    function drawBackground(){
        ctx.drawImage(imgBg, 0, 0); //Background
    }

    function draw() {
        drawBackground();

        for (var i=0; i< noOfDrops; i++)
        {
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop

        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        if (fallingDrops[i].y > 450) {  //Repeat the raindrop when it falls out of view
        fallingDrops[i].y = -25; //Account for the image size
        fallingDrops[i].x = Math.random() * 600;    //Make it appear randomly along the width
        }

        }
    }

    function setup() {
        var canvas = document.getElementById('canvas');

        if (canvas.getContext) {
          ctx = canvas.getContext('2d');
          imgBg = new Image();
          imgBg.src = "../images/background.png";

        setInterval(draw, 45);

        for (var i = 0; i < noOfDrops; i++) {
          var fallingDr = new Object();
          fallingDr.image =  new Image();
          fallingDr.image.src = '../images/ant.png';

          fallingDr.x = Math.random() * 600;
          fallingDr.y = Math.random() * 5;
          fallingDr.speed = 1 + Math.random() * 5;
          fallingDrops.push(fallingDr);
          }

        }
    }



