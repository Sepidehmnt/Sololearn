let rectangle = document.createElement("div");
rectangle.style.backgroundColor = "#f1c40f";
rectangle.style.position = "absolute";
document.body.appendChild(rectangle);

window.onload = makeRandomBox();
//Random boxes with random location,size and color
function makeRandomBox() {
  //start: random x,y
  rectangle.style.left = Math.floor(Math.random() * 200) + "px";
  rectangle.style.top = Math.floor(Math.random() * 300) + "px";
  //random width and height
  rectangle.style.width = Math.floor(Math.random() * 200) + "px";
  rectangle.style.height = Math.floor(Math.random() * 300) + "px";
  //random color
  rectangle.style.backgroundColor = getRandomColor();
}

//function for getting random color
function getRandomColor() {
  let redValue = Math.floor(Math.random() * 255);
  let greenValue = Math.floor(Math.random() * 255);
  let blueValue = Math.floor(Math.random() * 255);
  let bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  return bgColor;
}
