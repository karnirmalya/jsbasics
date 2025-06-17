class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME IS :- ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email, 
    this.password = password;
  }

  addCourse(){
    console.log(`A New Course was added by  ${this.username}`);
    
  }
}

const Radhe = new Teacher("RameshBabu","rameshraju23123@gmail.com","raju89rhfi")
// Radhe.logMe()
// Radhe.addCourse()

const  Mahesh = new User("MaheshBabu")
// Mahesh.logMe()
// Mahesh.addCourse()

// console.log(Radhe === Mahesh);
// console.log(Radhe === Teacher);
// console.log(Mahesh === User);
// console.log(Teacher === User);

console.log(Radhe instanceof Teacher);
console.log(Mahesh instanceof User);
console.log(Teacher instanceof User);
console.log(Radhe instanceof User);