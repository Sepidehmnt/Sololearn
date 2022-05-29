window.onload = makeRandomBox();
//Random boxes with random location,size and color
function makeRandomBox() {
  let numOfRect = Math.floor(Math.random() * 50) + 10;
  for (let i = 0; i < numOfRect; i++) {
    let rectangle = document.createElement("div");
    rectangle.style.position = "absolute";
    //start: random x,y
    rectangle.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    rectangle.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    //random width and height
    rectangle.style.width = Math.floor(Math.random() * 70) + 30 + "px";
    rectangle.style.height = Math.floor(Math.random() * 60) + 40 + "px";
    //random color
    rectangle.style.backgroundColor = getRandomColor();
    document.body.appendChild(rectangle);
  }
}

//function for getting random color
function getRandomColor() {
  let redValue = Math.floor(Math.random() * 255);
  let greenValue = Math.floor(Math.random() * 255);
  let blueValue = Math.floor(Math.random() * 255);
  let bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  return bgColor;
}
