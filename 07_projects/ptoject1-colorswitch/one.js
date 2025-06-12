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
