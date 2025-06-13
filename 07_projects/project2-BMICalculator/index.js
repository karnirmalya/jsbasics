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

    if (BMI <= 18.5) {
      message = 'You are <strong>Underweight</strong>.';
    } else if (BMI < 24.9 && BMI > 18.5) {
      message = 'You have a <strong>Normal weight</strong>.';
    } else if (BMI >= 24.9) {
      message = 'You are <strong>Overweight</strong>.';
    } 
    //else {
    //   message = 'You are <strong>Obese</strong>.';
    // }

    result.innerHTML = `Your BMI is <strong>${BMI}</strong><br>${message}`;
  });
}

// Call the function once DOM is loaded
window.addEventListener('DOMContentLoaded', calculateBMI);
