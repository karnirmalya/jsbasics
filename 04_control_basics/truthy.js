// const userEmail = "hitesh@aiml"
// const userEmail = ""
const userEmail = [];
if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have  user Email");
}

//FALCY VALUES

// false , 0 , -0 , Bigint 0n , NaN , null , undefined , ""

//TRUTHY VALUES

// true , "0" , "false" , " " , [] , {} , function(){} // empty function

// if(userEmail.length === 0 ){
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}


//Nullish Coalescing Operator (??) : null undefined

let val1 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);


//Ternary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("Greater than 80"):console.log("Less than 80")


