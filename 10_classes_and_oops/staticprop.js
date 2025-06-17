class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const Sital = new user("Sital");
// console.log(Sital.createId());

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const realMe = new Teacher("Real me 9 pro 5g", "realme9pro@fb.com");
console.log(realMe);
realMe.logMe();
// console.log(realMe.createId());

