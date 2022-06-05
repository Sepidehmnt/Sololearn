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
  console.log(rectangle);
  rectangle.style.position = "absolute";

  rectangle.style.left = generateRand(window.innerWidth - 150) + "px";

  console.log(rectangle.style.left);

  rectangle.style.top = generateRand(window.innerHeight - 150) + "px";

  rectangle.style.width = generateRand(70, 30) + "px";
  rectangle.style.height = generateRand(60, 40) + "px";

  rectangle.style.backgroundColor = getRandomColor();
  document.body.appendChild(rectangle);
}

//function for getting random color
function getRandomColor() {
  let colorRange = 256;
  let redValue = generateRand(colorRange);
  let greenValue = generateRand(colorRange);
  let blueValue = generateRand(colorRange);
  let bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return bgColor;
}

//Move each box when hover on it to random location
$("div").on("mouseover", moveRectangle);

//fuction for moving each random box to a random location
function moveRectangle() {
  $(this).animate({
    left: generateRand((window.innerWidth - 150) / 1.5),
    top: generateRand((window.innerWidth - 150) / 1.5),
  });
}
