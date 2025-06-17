const User = {

        _email: "ewbfuibag@gmail.com",
        _password: "23rgfxdze",
        
    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value;
    }
}


const Manoranjan = Object.create(User);
console.log(Manoranjan.email); 