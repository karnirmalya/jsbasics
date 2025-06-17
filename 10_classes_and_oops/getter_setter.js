class User {
  constructor(email, password) {
    (this.password = password), (this.email = email);
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    // return this.password.toUpperCase()
    // return this._password.toUpperCase()
    return `${this._password}hitesh`; //append somethng in  password
  }
  set password(pass) {
    // this.password= pass.toUpperCase()
    // this._password= pass.toUpperCase()
    this._password = pass;
  }
}

const Manoranjan = new User("manua23serf@gmail.com", "er2q34f24");
console.log(Manoranjan.password); // RangeError: Maximum call stack size exceeded
console.log(Manoranjan.email);
