// ES6



class User1{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
     
    //method
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Raju= new User1("Raju","raju1242@gmail.com","23435f2d23")
console.log(Raju.changeUsername());
console.log(Raju.encryptPassword());



//behind the scene 

function User(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

User.prototype.changeUsername = function (){
      return `${this.username.toUpperCase()}`
}

const chotaBheem = new User("chotaBheem","chota Bheem1242@gmail.com","43r3gwer134")
console.log(chotaBheem.changeUsername());
console.log(chotaBheem.encryptPassword());

