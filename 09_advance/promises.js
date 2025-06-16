// fetch('http://something.com').then().catch().finally()

const promiseOne = new Promise((resolve, reject) => {
  //Do an asyc task
  //DB calls , cryptography related , network call related
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 100);
});

promiseOne.then(() => {
  console.log("promise consumed");
}); //coonection with resolve

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task-2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async-2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "myemail23451@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Nirmalya", password: "rsnnit1242@" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

//then :- resolve
//catch:- reject
const userName = promiseFour.then(function(user){
  console.log(user)
  return user.username
})

console.log(userName);

// promiseFour.then().then().catch()
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("THe Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "JAVASCRIPT", password: "ronir1dr34@" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// async , await :- can't handle error directly we use try and catch to find error 
//async :-wait for completion of work
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log('error');
//   });


fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('error');
  });






