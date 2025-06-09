const name="Nirmalya "
const repoCount=10

// console.log(name+ repoCount+" value")

// `` => string interpolation  => used to create place holders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('niftg-bfgn-dsugfh-ciom')
console.log(typeof gameName);


console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,7)
console.log(newString);

const anotherString=gameName.slice(-11,3)
console.log(anotherString);

const newString1="    duda   "
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimLeft());
console.log(newString1.trimRight());


const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));


console.log(url.includes('sundra'));

console.log(gameName.split('-'))