"use strict";

document.querySelector(".copyright").textContent = new Date().getFullYear();

const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// selecting both images
const firstImage = document.querySelector(".first-image");
const secondImage = document.querySelector(".second-image");

const images = [
  "/images/rock.webp",
  "/images/paper.webp",
  "/images/scissor.webp",
];

const wining = () => {
  result.style.color = "#D1FFD1";
  result.textContent = "You won!";
};

const loosing = () => {
  result.style.color = "#FF8F8F";
  result.textContent = "You lost!";
};

const draw = () => {
  result.style.color = "#ffffff";
  result.textContent = "It's a draw";
};

const reset = () => {
  result.textContent = "?";
  result.style.color = "#ffffff";
  secondImage.src = "/images/paper.webp";
  firstImage.src = "/images/scissor.webp";
};

playBtn.addEventListener("click", playingMode);
resetBtn.addEventListener("click", reset);

function playingMode() {
  // the random generated number will be from zero to the lenght of the (images) array which is (3) excluded.
  const userRandomNumber = Math.trunc(Math.random() * images.length);
  const computerRandomNumber = Math.trunc(Math.random() * images.length);

  firstImage.src = images[userRandomNumber];
  secondImage.src = images[computerRandomNumber];

  if (userRandomNumber != computerRandomNumber) {
    if (userRandomNumber == 0 && computerRandomNumber == 2) {
      wining();
    } else if (userRandomNumber == 0 && computerRandomNumber == 1) {
      loosing();
    } else if (userRandomNumber == 1 && computerRandomNumber == 0) {
      wining();
    } else if (userRandomNumber == 1 && computerRandomNumber == 2) {
      loosing();
    } else if (userRandomNumber == 2 && computerRandomNumber == 1) {
      wining();
    } else if (userRandomNumber == 2 && computerRandomNumber == 0) {
      loosing();
    }
  } else {
    draw();
  }
}
