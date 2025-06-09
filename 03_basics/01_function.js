function sayMyname()  {
console.log("N")
console.log("I")
console.log("R")
console.log("M")
console.log("A")
console.log("L")
console.log("Y")
console.log("A")
}

// sayMyname()

// function addTwoNumbers(number1,number2){ //function definition =>parameter
//        console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){ //function definition =>parameter
    // let result=number1+number2
    // return result
    return number1+number2
}

const result =addTwoNumbers(3,8)   //function calling =>arguments
// addTwoNumbers(3,null)


// console.log("Result:", result);


function loginUserMessage(username = "Preeti"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//  const output = loginUserMessage("Nirmalya")
//  console.log(output);
//  console.log(loginUserMessage());
 

// function calculateCartPrice(...num1){
//         return num1
// }
function calculateCartPrice(val1 , val2, ...num1){
        return num1
}
console.log(calculateCartPrice(34,56,89,740));

const user =  {
    username: "Raja",
    prices:450
}

function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
        
}


// handleObject(user)

handleObject({
    username:"Rashmi",
    price:23543
})

const myNewArray = [200,300,400,500,600]

function returnSecondvalue(getArray){
       return getArray[1];
}

// console.log(returnSecondvalue(myNewArray));

console.log(returnSecondvalue([200,450,320,459,9023]));


