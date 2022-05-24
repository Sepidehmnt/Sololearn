let redValue, greenValue, blueValue;

function createBoxes() {
  let body = document.getElementsByTagName("body")[0];
  let canvas = document.createElement("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  let context = canvas.getContext("2d");

  for (let i = 0; i < 100; i++) {
    redValue = Math.floor(Math.random() * 256);
    greenValue = Math.floor(Math.random() * 256);
    blueValue = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    context.fillStyle = bgColor;

    context.fillRect(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight,
      Math.random() * 60 + 40,
      Math.random() * 60 + 40
    );
  }
  body.appendChild(canvas);
}
window.onload = createBoxes;
