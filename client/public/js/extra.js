// var canvas = document.getElementById('canvas'),
// ctx = canvas.getContext('2d');
// var cw = canvas.width;
// var ch = canvas.width;

///////////////////////////////////////////////////////////////////////////
// var ant = new Image();
// imgBg.addEventListener('load', eventAntLoaded , false);
// ant.src = "../images/ant.png";

      var xRandom= Math.random() * 600; //Make it appear randomly along the width
      for (var j = 0; j < fallingAnts.length; j++) {
        while (true){
          if (fallingAnts[j].x !== xRandom+45 || fallingAnts[j].x !== xRandom-45) {
            console.log(fallingAnts[j].x);
            fallingAnts[i].x = xRandom;
            break;
          } else {
            fallingAnts[i].x = xRandom;
            break;
          }
        }
      }
    console.log("random", xRandom);

// function checkXdups () {
//   for (var i = 0; i < fallingAnts.length; i++) {
//     if (fallingAnts.indexOf(fallingAnts[i].x) == -1) {

//     } else {
//       fallingAnts[i].x = Math.random() * 800;
//     }
//   }
// }

function checkXaxis () {
  var xRandom= Math.random() * 800;
  for (var i = 0; i < fallingAnts.length; i++) {
    while (true) {
      if (fallingAnts[i].x < fallingAnts[i].x + 30 || fallingAnts[i].x > fallingAnts[i].x - 30) {
        console.log("assigned.x: " + fallingAnts[i].x);
        break;
      } else {
        fallingAnts[i].x = xRandom;
        console.log("new: " + falling[i].x);
        break;
      }
    }
  }
}


function setup() {
    var canvas = document.getElementById('canvas');

//The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.
    // if (canvas.getContext) {
      ctx = canvas.getContext('2d');
      imgAnt = new Image();
      imgAnt.src = "../images/background.png";

    setInterval(draw, 45);

    for (var i = 0; i < noOfAnts; i++) {
      var fallingDr = {};
      fallingDr.image =  new Image();
      fallingDr.image.src = '../images/ant.png';

      fallingDr.x = Math.random() * 600;
      fallingDr.y = Math.random() * -5;
      fallingDr.speed = 1 + Math.random() * 5;
      fallingAnts.push(fallingDr);
  }
}
// }
///////////////////////////////////////////////////////////////////////////
// var images=[];
// images.push({x:0,y:250,moveX:10,maxX:500,delay:100,nextTime:0,url:'../images/ant.png'});
// images.push({x:20,y:30,moveX:10,maxX:400,delay:500,nextTime:0,url:'../images/ant.png'});

// var imageCount=images.length;
// for(var n=0;n<images.length;n++){
//   var i=images[n];
//   i.img=new Image();
//   i.img.onload=start;
//   i.img.src=i.url;
// }
// function start(){
//   if(--imageCount>0){return;}
//   requestAnimationFrame(animate);
// }


// function animate(time){
//   requestAnimationFrame(animate);
//   var needsRedrawing=false;
//   for(var n=0;n<images.length;n++){
//     var i=images[n];
//     if(time>i.nextTime){
//       if(i.x+i.moveX<i.maxX){
//         i.x+=i.moveX;
//         i.nextTime+=i.delay;
//         needsRedrawing=true;
//       }
//     }
//   }
//   if(needsRedrawing){
//     ctx.clearRect(0,0,cw,ch);
//     for(var n=0;n<images.length;n++){
//       var i=images[n];
//       ctx.drawImage(i.img,i.x,i.y);
//     }
//   }
// }

///////////////////////////////////////////////////////////////////////////

// // var counter = 0;
// var ant = new Image();
// ant.addEventListener('load', eventAntLoaded , false);
// ant.src = "../images/ant.png";
// }


// function drawAnt() {
//   // 20/44 44.444%
//   placeAnt(ant, 0, 0, 20, 44);
//   placeAnt(ant, 50, 50, 27, 60);
//   context.drawImage(ant, 10*counter, 0,20,44,50,50,64,64);
//     counter++;
//       if (counter >1) {
//       counter = 0;
//     }
// }


// function eventAntLoaded() {
//    startUp();
// }

// function startUp(){
//    gameLoop();
// }

// function gameLoop() {
//     window.setTimeout(gameLoop, 100);
//     drawAnt();
// }

// function placeAnt(obj, posX, posY, width, height) {
//    if (width && height) {
//      context.drawImage(obj, posX, posY, width, height);
//    } else {
//      context.drawImage(obj, posX, posY);
//    }
// }

////////////////* STEPS *////////////////
// detect collision with other ants (make smaller)
var ant = {x: 100, y:100, w:45, h: 80};
var hill = {x: 100, y: 400, r: 450};

function hillAntHillColliding(ant, hill) {
  var distX = Math.abs(ant.x - hill.x-hill.w/2);
    var distY = Math.abs(ant.y - hill.y-hill.h/2);

    if (distX > (hill.w/2 + ant.r)) { return false; }
    if (distY > (hill.h/2 + ant.r)) { return false; }

    if (distX <= (hill.w/2)) { return true; }
    if (distY <= (hill.h/2)) { return true; }

    var dx=distX-hill.w/2;
    var dy=distY-hill.h/2;
    return (dx*dx+dy*dy<=(ant.r*ant.r));
}


// Left and Right arrow keys - can you rotate the gun? or flip through array of pics
var line = {
  x: 300,
  y: 200,
  length: 100,
  angle: 0
};

line.angle += (Math.PI*2) / 100;
var x = line.x + line.length * Math.cos(line.angle);
var y = line.y + line.length * Math.sin(line.angle);

