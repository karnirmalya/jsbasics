//tells about hidden things of object

// const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI=4
// console.log(Math.PI);

const Naresh = {
    name : "Naresh",
    salary: 10000,
    isAvailable : false,

    joinDone: function(){
        console.log("Naresh joined a FAANG company");
        
    }
}
// console.log(Naresh);

// const descriptor= Object.getOwnPropertyDescriptor(Naresh,'isAvailable')
// console.log(descriptor);

Object.defineProperty(Naresh,'name',{
    // writable : false,
    // enumerable :  true  //name is printed in loop
    enumerable : false    //name is not printed 
    
})
// const descriptor= Object.getOwnPropertyDescriptor(Naresh,'name')
// console.log(descriptor);

// Naresh.name="Ramesh"
// console.log(Naresh);


for (let[key,value] of Object.entries(Naresh)) {
    if(typeof value !== 'function')
    console.log((`${key}: ${value}`));
    
}
