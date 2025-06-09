//ARROW FUNCTIONS 

const user ={
     username: "Himanshu",
     price:99,

     welcomeMessage : function(){
        console.log(`${this.username} ,  welcome to website`);
        console.log(this);
        
     }

}

// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()


console.log(this);  //empty object as ouput

// function chai()
// {
//     let username="Rajakar"
//     console.log(this.username)  //undefined output .Hence this keyword is used in object not in function
// }
// chai()

// const chai = function(){
//     let username="Rajakar"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username="Rajakar"
//     console.log(this.username)
// }

// chai()


// const addTwo = (num1,num2) => {    //EXPLICIT RETURN
//      return num1+num2
// }


// const addTwo = (num1,num2) =>  num1+num2   //IMPLICIT RETURN 

// const addTwo = (num1,num2) =>  (num1+num2)   //IF YOU USE {} -->THEN U HAVE TO WRITE RETURN 
// IF U USE ()--> NO NDDE TO WRITE RETURN


const addTwo = (num1,num2) => ( {username:"Hitanshu"})

console.log(addTwo(34,52));

const myArray = [1,2,3,4,5,6,77]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())