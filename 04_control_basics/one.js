//if

const temperature = 43;

// if(temperature >50){
//    console.log("temperature is high ");
// }
// else{
//    console.log("Temperature is low");
// }

// console.log("Executed")
// compariosn operator
// > , < , >= , <= , == , != , === , !==

const score = 200;

// if(score > 100){
//       // const power = "fly"
//       var power = "fly"
//       console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`) //power is not defined

const balance = 1000;

// if(balance > 5000) console.log("test"), console.log("test2");   //bad practice

// if (balance < 500) {
//   console.log("less then 500 ");
// } else if (balance < 750) {
//   console.log("less then 750 ");
// } else if (balance < 900) {
//   console.log("less then 900 ");
// } else {
//   console.log("less then 1200 ");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course.");
} else {
  console.log("Don't Allow to buy course.");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User LoggedIN");
}
