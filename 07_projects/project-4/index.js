let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector(".guessSubmit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const para = document.createElement("p");


let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    
    if (numGuess > 10) {
      cleanupGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You guessed too low!`);
  } else {
    displayMessage(`You guessed too high!`);
  }
}

function cleanupGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}, `;
  numGuess++;
  remaining.textContent = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", true);
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  console.log(newGameButton);

  newGameButton.addEventListener("click", function () {
    //variable reset
    randomNumber = parseInt(Math.random() * 100 + 1);
    
    numGuess = 1;
    guessSlot.textContent = "";
    remaining.textContent = `${10}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(para);
    playGame = true;
    lowOrHi.innerHTML = "";
  });
}
