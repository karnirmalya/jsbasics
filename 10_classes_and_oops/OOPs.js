//Object Literal 

const user = {
    username : "Nirmalya",
    logInCount : 10,
    signedIn : true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

const user2 = {
    username : "Rajesh",
    logInCount : 30,
    signedIn : true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// new :- This key word helps you to get multiple unstances from a same class . used to create new context

function User(username,logInCount,isLoggedIn){
    // myusername = username
     this.username = username
     this.logInCount = logInCount
     this.isLoggedIn = isLoggedIn

     this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
     }
 return this;
}


// function User(username,logInCount,isLoggedIn){
//     // myusername = username
//      this.username = username
//      this.logInCount = logInCount
//      this.isLoggedIn = isLoggedIn
//  //return this;
// }

//values are overwtitten
// const userTwo =  User("Smruti",9,false)
// const userOne = User("Nirmalya",5,true)


//new instances are created
const userTwo = new  User("Smruti",9,false)
const userOne = new User("Nirmalya",5,true)

console.log(userOne.constructor);
console.log(userTwo);



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


