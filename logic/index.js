"use strict";

document.querySelector(".copyright").textContent = new Date().getFullYear();

// selecting the button that actually starts the game(changes the images)
const playBtn = document.querySelector(".play");

// selecting the result area(the area that will display the winner and looser)
const result = document.querySelector(".result");

// selecting the reset button which(brings back the default images)
const resetBtn = document.querySelector(".reset");

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
