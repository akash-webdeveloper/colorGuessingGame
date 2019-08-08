var numSquare = 6 ;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var newColorButton = document.getElementById("newButton");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");



easyButton.addEventListener("click", function() {
easyButton.classList.add("selected");
hardButton.classList.remove("selected");
numSquare = 3;
colors = generateRandomColors(numSquare);
pickedcolor = pickColor();
colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
  if(colors[i]){
  squares[i].style.background = colors[i];
}
else{
  squares[i].style.display = "none" ;
}

}

h1.style.background="#232323";
});

hardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquare = 6;
  colors = generateRandomColors(6);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block" ;
}

});


newColorButton.addEventListener("click", function() {
colors = generateRandomColors(numSquare);
pickedcolor = pickColor();
colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
}
h1.style.background="#232323";
});

colorDisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedcolor) {
      messageDisplay.textContent = "correct";
      newColorButton.textContent = "Play Again";
      changeColors(pickedcolor);
    h1.style.background = clickedColor;

    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "try again ?";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 255 + 1);
  var green = Math.floor(Math.random() * 255 + 1);
  var blue = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
