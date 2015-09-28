  var cx = document.querySelector("canvas").getContext("2d");

  var img = document.createElement("img");

  img.src = "imgages/.png";

  img.addEventListener("load", function() {
      for (var x = 10; x < 200; x += 30)
          cx.drawImage(img, x, 10);
  });
