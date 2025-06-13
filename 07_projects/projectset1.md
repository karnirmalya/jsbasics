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