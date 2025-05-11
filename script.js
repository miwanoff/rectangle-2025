let timer;
let time = 1000;
let bottom = false;
let right = false;
let leftOffset = 0;
let topOffset = 0;

let maxOffset = 200;

const box = document.getElementById("box");

function moveBox() {
  box.style.left = leftOffset + "px";
  box.style.top = topOffset + "px";

  if (leftOffset > maxOffset) {
    right = true;
  } else if (leftOffset == 0) {
    right = false;
  }

  if (topOffset > maxOffset) {
    bottom = true;
  } else if (topOffset == 0) {
    bottom = false;
  }

  if (bottom == false && right == false) {
    topOffset += 30;
  }

  if (bottom == true && right == false) {
    leftOffset += 30;
  }

  if (bottom == true && right == true) {
    topOffset -= 30;
  }

  if (bottom == false && right == true) {
    leftOffset -= 30;
  }
}

function speed() {
  time = prompt("Введить швидкість");
  console.log(time);
  box.innerHTML = time; 
  clearInterval(timer); 
  timer = setInterval(moveBox, time); 
}

timer = setInterval(moveBox, time);
