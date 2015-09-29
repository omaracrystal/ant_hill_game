var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

drawAnt();

function drawAnt()
{
  ant = new Image();
  ant.src = '../images/ant.png';
  ant.onload = function(){
    context.drawImage(ant, 100, 100);
  };
}
