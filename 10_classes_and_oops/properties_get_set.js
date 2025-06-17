function User(email,password){
    this._password = password,
    this._email = email;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

      Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const Dharmseh = new User("dharmesh21948eds@gmail.com","dharmadon")

console.log(Dharmseh.email)
console.log(Dharmseh.password)


