// // add scripts

// // $(document).on('ready', function() {
// //   console.log('sanity check!');
// // });


// document.addEventListener("DOMContentLoaded", function() {
//   drawBorder();
// });


// function drawBorder(){
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext('2d');
//     var size = { x: canvas.width, y: canvas.height };
//     //have to set colors etc befor it is drawn
//     context.strokeStyle = 'black';
//     //takes 4 parameters
//     context.strokeRect(0,0, size.x, size.y);
// }

// var buttons = document.getElementsByTagName('button');

// //find our buttons and add eventlistener to them
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(){
//     if (this.id === 'clear') {
//       clearCanvas();
//     } else if (this.id === 'fib') {
//       drawFibonacci();
//     } else {
//       drawRectangle(this.id);
//     }
//   });
// }

// function drawRectangle(color){
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext('2d');
//     context.fillStyle = color;
//     //takes 4 parameters
// }

// function clearCanvas(){
//   var canvas = document.getElementById("canvas");
//   var context = canvas.getContext('2d');
//   context.clearRect(0,0, canvas.width, canvas.height);
//   drawBorder();
// }

function drawRectangle(color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var randomX = Math.floor(Math.random()*(250-1 +1)) + 1;
  var randomY = Math.floor(Math.random()*(250-1 +1)) + 1;
  var randomHeight = Math.floor(Math.random()*(100-10+1))+ 1;
  var randomWidth = Math.floor(Math.random()*(100-10+1))+ 1;
  context.fillStyle = color;
  context.fillRect(randomY, randomX, randomWidth, randomHeight);
}

// var pixel_size = canvas.width/100;

// function drawPixel(x, y, color) {
//   var canvas = document.getElementById("canvas");
//   var context = canvas.getContext('2d');
//   context.fillStyle = color;
//   context.fillRect(x*pixel_size, y*pixel_size, pixel_size, pixel_size);
// }

// function drawRow(rowNumber, rowLength){
//   for (var i = 0; i < rowLength; i++) {
//     drawPixel(rowNumber, i, 'green');
//   }
// }

// function drawFibonacci() {
//   for(rowNumber=0; rowNumber<15; rowNumber ++) {
//     var rowLength = fib(rowNumber);
//       drawRow(rowNumber, rowLength, "orange");
//   }
// }

// //recursive fibonacci function
// function fib(x) {
//   if (x === 0) {
//     return 0;
//   } else if (x === 1) {
//     return 1;
//   } else {
//     return fib(x-1)+fib(x-2);
//   }
// }


// //recursive funtion to count down from a given number
// function printTo(number) {
//   if (number === 0) {
//     console.log(number);
//   } else {
//     console.log(number);
//     number = number -1;
//     printTo(number);
//   }
// }
