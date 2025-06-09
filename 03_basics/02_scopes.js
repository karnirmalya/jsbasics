var c = 300;
d = 900; //by default "var" eyword is used

let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  //console.log("INNER: ", a);
}

// console.log("Outer: ",a)
// console.log(b)
// console.log(c)    //global variable

function one() {
  const username = "Raja"

  function two() {
    const website = "youtube";
    //console.log(username);
  }
  // console.log(website);
  two();
}

one();

if(true){
     const username = "Nirmalya"
     if(username === "Nirmalya"){
        const website = " youtube"
        //console.log(username+website);
        
     }
    // console.log(website);
    
}

// console.log(username);




// **********INTERESTING********


addone(6)
function addone(num){
    return num+1
}
// addone(6)

//addTwo(6) //function hoisting 
const addTwo = function (num){
    return num+2
}
// addTwo(6)

