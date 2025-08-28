// ***********************************************************************************************

// ! 2 day -> Constructor Function

// ***********************************************************************************************

// const person1 = {
//   name: "Alice",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// const person2 = {
//   name: "Bob",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// this.name is the same as person.name

// Solution: Constructor Functions

// Step : 1
// function Person(name) {
//   const peronObj = {};
//   peronObj.name = name;
//   peronObj.greet = function () {
//     console.log("Hello, my name is " + this.name);
//   };
//   return peronObj;
// }

// const person1 = Person("Alice");
// const person2 = Person("Bob");
// person1.greet(); // Output: Hello, my name is Alice
// person2.greet(); // Output: Hello, my name is Bob

// step : 2

// const personMethods = {
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },

//   howAreYou: function () {
//     console.log("I'm fine, how about you?");
//   },

//   hobby: function () {
//     console.log("I like coding");
//   },
// };

// function Person(name) {
//   const peronObj = {};
//   peronObj.name = name;
//   peronObj.greet = personMethods.greet;
//   peronObj.howAreYou = personMethods.howAreYou;
//   peronObj.hobby = personMethods.hobby;
//   return peronObj;
// }

// const person1 = Person("Alice");
// const person2 = Person("Bob");
// person1.greet(); // Output: Hello, my name is Alice
// person1.howAreYou(); // Output: I'm fine, how about you?

// person2.greet(); // Output: Hello, my name is Bob
// person2.howAreYou(); // Output: I'm fine, how about you?

// ***********************************************************************************************

// 3rd day -> Inheritance

// ***********************************************************************************************

// !   .prototype (a property of constructor functions)   vs     .__proto__ (the actual prototype of an object)

// prototype property sirf functions (jo constructors ho sakte hain) ke paas hoti hai.
// Sab built-in constructors jaise Array, Object, Function, String, Number, Boolean, Date, RegExp, Map/Set, Error, Custom Functions. ke paas prototype hota hai.

// .__proto__
// This is found on all JavaScript objects.
// It points to the object that this one inherited from.
// It's part of the prototype chain (inheritance system in JavaScript).

// function akshay() {}
// akshay.prototype.name = "Akshay";
// console.log(akshay.prototype);

// const arr = [];
// console.log(arr);
// console.log(arr.prototype);

// const fn = () => {};
// console.log(fn.prototype); // undefined (not a constructor)

// console.log(Array.prototype); // Array is a constructor
// Object(0) [] -> ye ke object he jo behave karta he as a empty array (i.e., it is an array, just empty).
// The (0) means it has a length of 0

// Array.prototype.myOwnNameMethod = "Akshay";
// console.log(Array.prototype);
// console.log(Object.getOwnPropertyNames(Array.prototype));

// -------------------------------------------------------------------------

// const personMethods = {};

// function Person(name) {
//   const peronObj = Object.create(Person.prototype);
//   peronObj.name = name;
//   return peronObj;
// }
// console.log(Person.prototype);

// Person.prototype.greet = function () {
//   console.log("Hello, my name is " + this.name);
// };

// Person.prototype.howAreYou = function () {
//   console.log("I'm fine, how about you?");
// };

// Person.prototype.hobby = function () {
//   console.log("I like coding");
// };

// const person1 = Person("Alice");
// const person2 = Person("Bob");
// person1.greet(); // Output: Hello, my name is Alice
// person1.howAreYou(); // Output: I'm fine, how about you?

// person2.greet(); // Output: Hello, my name is Bob
// person2.howAreYou(); // Output: I'm fine, how about you?

// ***********************************************************************************************

//! 4th day -> introduction of new keyword and rest and spread operator

// new keyword  : used to create new objects from constructor functions and class constructors
// new create an empty object name as this , and also it return itself we dont have to do manually

// ***********************************************************************************************

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log("Hello, my name is " + this.name);
// };

// Person.prototype.howAreYou = function () {
//   console.log("I'm fine, how about you?");
// };

// Person.prototype.hobby = function () {
//   console.log("I like coding");
// };

// const person1 = new Person("Alice");
// const person2 = new Person("Bob");

// person1.greet(); // Output: Hello, my name is Alice
// person1.howAreYou(); // Output: I'm fine, how about you?

// person2.greet(); // Output: Hello, my name is Bob
// person2.howAreYou(); // Output: I'm fine, how about you?

// or we can write like this

// function Person(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// const person1 = new Person("Akshay");
// person1.greet(); // Output: "Hello, my name is Akshay"
