# Javascript and Classes

## Yes JavaScript does have classes. This feature was introduced with the ES2015(ECMA Script) specifiaction(often referred as ES6).JavaScript is primarily a prototype-based language and it's classes are primarily syntactic sugar over existing prototype-based inheritance mechanism.It provides a moe familar syntax for developers coming from class-based languages such as Java or c++ but under the hood it works somewhat differently..JavaScript still uses prototypes, but classes give developers a more familiar, cleaner syntax (similar to Java, C++, or Python).

# Example of a Class in JavaScript:

```JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const user = new Person("Alice", 30);
user.greet(); // Hello, I'm Alice and I'm 30 years old.
```

# This is equivalent to the old prototype-style code:

```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
};

const user = new Person("Alice", 30);
user.greet();

```

# OOPs
## Objects
- Collection of properties and members
- toLowerCase
## Why to use OOPs
- reusability of code
- services and its instances
   

## parts of OOPs
- object literal 


- Constructor function 

- Prototypes

- Classes

- Instances (new , this)

## Four pillars

- Abstraction (fetch)
- Encapsulation 
- Inheritance 
- Polymorphism (console.log() )