function setUsername(username) {
    //DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
        //call :- used to hold the reference of the function (passes current execution context to another function)
        //this :- here this passes context 
        setUsername.call(this , username),
         this.password = password,
         this.email=email
}

const userOne = new createUser("Nirmalya","alkehoih13431@gmail.com","24204")
console.log(userOne);
