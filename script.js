"use strict";

const button = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const body = document.querySelector("body");
const questionMark = document.querySelector(".number");
const tryAgain = document.querySelector(".again");
let score = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

button.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  // Whne there is no input
  if (!guess || guess > 20 || guess < 0) {
    message.textContent = "Please enter a valid number!";

    // when the answer is correct
  } else if (guess === secretNumber) {
    message.textContent = "Correct! You Win!";
    body.setAttribute("style", "background-color: #60b347");
    questionMark.textContent = secretNumber;
    questionMark.setAttribute("style", "width: 30rem");

    // when then the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Too High!";
      score--;
      scoreElement.textContent = score;
    } else {
      message.textContent = "You lose!";
      scoreElement.textContent = 0;
    }

    // when the guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "Too Low!";
      score--;
      scoreElement.textContent = score;
    } else {
      message.textContent = "You lose!";
      scoreElement.textContent = 0;
    }
  }
});

tryAgain.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreElement.textContent = 10;
  questionMark.setAttribute("style", "width: 15rem");
  questionMark.textContent = "?";
  body.setAttribute("style", "background-color: #222");
  guessInput.value = "";
  message.textContent = "Start guessing...";
});
