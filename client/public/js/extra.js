// var canvas = document.getElementById('canvas'),
// ctx = canvas.getContext('2d');
// var cw = canvas.width;
// var ch = canvas.width;

///////////////////////////////////////////////////////////////////////////
// var ant = new Image();
// imgBg.addEventListener('load', eventAntLoaded , false);
// ant.src = "../images/ant.png";

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



