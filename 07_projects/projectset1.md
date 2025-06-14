# projects related to DOM

## project link

[PROJECT1](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

## project1 solution code

```javascript
const myButtons = document.querySelectorAll(".button");
// console.log(myButtons);

const body = document.querySelector("body");

//Arrow function to add event listener to each button
myButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);

    console.log(e.target);
    const targetId = e.target.id;
    console.log(targetId);

    switch (targetId) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      case "black":
        body.style.backgroundColor = "rgb(135, 120, 120)";
        break;

      case "pink":
        body.style.backgroundColor = "pink";
        break;
      case "orchide":
        body.style.backgroundColor = "orchid";
        break;

      default:
        break;
    }

    // if (e.target.id === 'grey') {
    //     body.style.backgroundColor = 'grey';

    // } else if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = 'yellow';
    // }
    //  else if (e.target.id === 'black') {
    //     body.style.backgroundColor = 'rgb(135, 120, 120)';
    // }
    //  else if (e.target.id === 'pink') {
    //     body.style.backgroundColor = 'pink';
    // }
  });
});
```

## project-2 solution code

```Javascript
function calculateBMI() {
  const form = document.getElementById('bmiForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weightInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const result = document.getElementById('result');

    if (!height || height <= 0) {
      result.innerHTML = `⚠️ Please enter a valid height.`;
      return;
    }

    if (!weight || weight <= 0) {
      result.innerHTML = `⚠️ Please enter a valid weight.`;
      return;
    }

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    let message = '';

    if (BMI < 18.5) {
      message = 'You are <strong>Underweight</strong>.';
    } else if (BMI < 24.9) {
      message = 'You have a <strong>Normal weight</strong>.';
    } else if (BMI < 29.9) {
      message = 'You are <strong>Overweight</strong>.';
    } else {
      message = 'You are <strong>Obese</strong>.';
    }

    result.innerHTML = `Your BMI is <strong>${BMI}</strong><br>${message}`;
  });
}

// Call the function once DOM is loaded
window.addEventListener('DOMContentLoaded', calculateBMI);

```


## project-3 solution code

```Javascript
const clock = document.querySelector('#clock')


setInterval(function()  {
    let date=new Date()
    clock.innerHTML = date.toLocaleTimeString() 
}, 1000);
```


##  project-4 solution code

```Javascript

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

```

##  project-5 solution code
```Javascript
const insert = document.querySelector('#insert')

window.addEventListener('keypress',(e) =>{
    insert.innerHTML = `
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    
    <th>code</th>

  </tr>
  <tr>
    <td>${e.key === ' '?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>
    `
})
```

##  project-6 solution code
```Javascript
//Generate a random colour

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  intervalId = setInterval(changeBgColor, 1000);
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);

```