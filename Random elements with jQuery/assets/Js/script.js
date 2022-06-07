const maxWidth = 100;
const maxHigh = 100;
const colorRange = 256;

//The load event is sent to an element when it and all sub-elements have been completely loaded
$(window).on("load", getRandomElement());

//This function produces some random elements according to for loop and its size
function getRandomElement() {
  let numOfRect = generateRand(50, 10);
  for (let i = 0; i < numOfRect; i++) makeRectangle();
}

//function for producing random numbers
function generateRand(multiplier, operand = 0) {
  return Math.floor(Math.random() * multiplier) + operand;
}

//This function creates some random rectangles with random size
function makeRectangle() {
  let rectangle = $("<div>");

  $(rectangle).css({
    left: generateRand(window.innerWidth - maxWidth) + "px",
    top: generateRand(window.innerHeight - maxHigh) + "px",
    position: "absolute",
  });

  $(rectangle).width(generateRand(70, 30) + "px");

  $(rectangle).height(generateRand(60, 40) + "px");

  $(rectangle).css("background-color", getRandomColor());

  $("body").append(rectangle);
}

//This function produces random color
function getRandomColor() {
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
  $(this).animate(
    {
      left: generateRand(window.innerWidth - maxWidth),
      top: generateRand(window.innerHeight - maxHigh),
    },
    600
  );
}
