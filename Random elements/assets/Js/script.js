window.onload = getRandomElement();

//random size
function getRandomElement() {
  let numOfRect = Math.floor(Math.random() * 50) + 10;
  for (let i = 0; i < numOfRect; i++) {
    //start: random x,y
    let leftSide = Math.floor(Math.random() * window.innerWidth) + "px";
    let topSide = Math.floor(Math.random() * window.innerHeight) + "px";
    //random width and height
    let boxWidth = Math.floor(Math.random() * 70) + 30 + "px";
    let boxHeight = Math.floor(Math.random() * 60) + 40 + "px";
    makeRectangle(leftSide, topSide, boxWidth, boxHeight);
  }
}
//Random boxes with random location,size and color
function makeRectangle(leftSide, topSide, boxWidth, boxHeight) {
  let rectangle = document.createElement("div");
  rectangle.style.position = "absolute";
  rectangle.style.left = leftSide;
  rectangle.style.top = topSide;
  rectangle.style.width = boxWidth;
  rectangle.style.height = boxHeight;
  //random color
  rectangle.style.backgroundColor = getRandomColor();
  document.body.appendChild(rectangle);
}

//function for getting random color
function getRandomColor() {
  let redValue = Math.floor(Math.random() * 255);
  let greenValue = Math.floor(Math.random() * 255);
  let blueValue = Math.floor(Math.random() * 255);
  let bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return bgColor;
}

//Move each box when hover on it to random location
let rectangles = document.getElementsByTagName("div");
console.log(rectangles);
//foor...of loop can iterate over the values. Each of div in body
for (let rectangle of rectangles) {
  rectangle.addEventListener("mouseover", moveRectangle);
}

//fuction for moving each random box to a random location
function moveRectangle(event) {
  let xPos = Math.floor(Math.random() * innerWidth);
  let yPos = Math.floor(Math.random() * innerHeight);
  let element = event.target;
  element.style.setProperty("left", xPos + "px");
  element.style.setProperty("top", yPos + "px");
}
