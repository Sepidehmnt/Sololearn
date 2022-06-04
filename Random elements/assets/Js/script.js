window.onload = getRandomElement();

function getRandomElement() {
  let numOfRect = generateRand(50, 10);
  for (let i = 0; i < numOfRect; i++) makeRectangle();
}
//random size
function generateRand(multiplier, operand = 0) {
  return Math.floor(Math.random() * multiplier) + operand;
}
function makeRectangle() {
  let rectangle = document.createElement("div");
  rectangle.style.position = "absolute";

  rectangle.style.left = generateRand(window.innerWidth) + "px";
  rectangle.style.top = generateRand(window.innerHeight) + "px";

  rectangle.style.width = generateRand(70, 30) + "px";
  rectangle.style.height = generateRand(60, 40) + "px";

  rectangle.style.backgroundColor = getRandomColor();
  document.body.appendChild(rectangle);
}

//function for getting random color
function getRandomColor() {
  let redValue = generateRand(255);
  console.log(redValue);

  let greenValue = generateRand(255);
  let blueValue = generateRand(255);
  let bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return bgColor;
}

//Move each box when hover on it to random location
let rectangles = document.getElementsByTagName("div");

//foor...of loop can iterate over the values. Each of div in body
for (let rectangle of rectangles) {
  rectangle.addEventListener("mouseover", moveRectangle);
}

//fuction for moving each random box to a random location
function moveRectangle(event) {
  let xPos = generateRand(innerWidth);
  let yPos = generateRand(innerHeight);
  let element = event.target;
  element.style.setProperty("left", xPos + "px");
  element.style.setProperty("top", yPos + "px");
}
