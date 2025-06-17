let myName = "Nirmalya    ";
let myFamily = "karfamily   ";

// console.log(myName.length);
// console.log(myName.truelength);

let anotherUsername = 'HappySingh     '
String.prototype.truelength = function(){
    console.log(`${this}`);
    
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

anotherUsername.truelength()
"virginmojito  ".truelength()
"Lavanya Sundari ".truelength()

let myHeroes = ["Thor", "CaptainAmerica", "Tonystark"];

let heroPower = {
  Thor: "hammmer",
  CaptainAmerica: "shield",
  Tonystark: "suit",

  getSpiderPower: function () {
    console.log(`Thor power is ${this.Thor}`);
  },
};

Object.prototype.raja = () => {
  console.log(`Raja is present in all object`);
};

Array.prototype.heyJs = ()=>{
    console.log(`Hello JavaScript family kese ho sab badhiya he na`);
}


// heroPower.raja();
// myHeroes.raja();

// myHeroes.heyJs()
// heroPower.heyJs()


//INHERITANCE

const user = {
    username: "Nirmalya",
    isLoggedIn : false,
    email: 'nk231242@gmail.com'
}
const Teacher = {
    makevideo : true
}

const teachingSupport = {
   isAvailable :false
}
const TASupport = {
    makeAssignment : 'JS assignemnt',
    fullTime : false,
    __proto__:teachingSupport
}

Teacher.__proto__ = user


//modern synatax
Object.setPrototypeOf(teachingSupport,Teacher)
