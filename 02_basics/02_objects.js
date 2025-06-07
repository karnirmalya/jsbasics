//singleton

//object literals
 

const mySym= Symbol("key1")


const jsUser={
    name: "Nirmalya",
    "full name" : "Nirmalya Kar",
    [mySym]: "mykey1", //syntax for declaration of symbol
    age:22,
    location:"Balichandrapur",
    email:"nimralya@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser["full name"])
//console.log(jsUser.full name) //throws error

// console.log(jsUser["email"])
// console.log(jsUser.email)
// console.log(jsUser[mySym])  //accessing symbols
// console.log(typeof jsUser.mySym) //data type : string rather than symbol

// jsUser.email= "raja@232341gmail.com"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.email="leibjhniujerm@chatgpt.com"
// console.log(jsUser)


jsUser.greeting= function(){
    console.log("Hello js user");
}

// console.log(jsUser.greeting);

// console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`Hello js user ,${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())




