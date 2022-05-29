let rectangle = document.createElement("div");
rectangle.style.backgroundColor = "#f1c40f";
rectangle.style.position = "absolute";
document.body.appendChild(rectangle);

window.onload = makeRandomBox();
function makeRandomBox() {
  rectangle.style.left = Math.floor(Math.random() * 200) + "px";
  rectangle.style.top = Math.floor(Math.random() * 300) + "px";
  rectangle.style.width = Math.floor(Math.random() * 200) + "px";
  rectangle.style.height = Math.floor(Math.random() * 300) + "px";
}
