// ***********************************************************************************************

// ! 2 day (EP - 19 ) -> Constructor Function

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

//  ? 3rd day (Ep - 20) -> Inheritance

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

// ? 4th day (EP - 21) -> introduction of new keyword and rest and spread operator

// ! new keyword  : used to create new objects from constructor functions and class constructors
// ! new create an empty object name as this , and also it return itself we dont have to do manually

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

// ***********************************************************************************************

// ! The rest operator collects multiple elements into a single array (or object), and is commonly used in:
// ? Function parameters , Array/object destructuring

// **  Example 1: Rest in array/object destructuring

// Array Destructuring :  using the rest operator

// const ary = [1, 2, 3, 4];
// const [first, second, ...rest] = ary;
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4]

// Object Destructuring using the rest operator

// const obj = {
//   name: "Akshay",
//   age: 23,
//   address: {
//     street: "Dadar",
//     city: "Mumbai",
//     state: "Maharastra",
//   },
// };

// const { name, age, ...rest } = obj;
// console.log(name); // "Akshay"
// console.log(age); // 23
// console.log(rest); // { address: { street: 'Dadar', city: 'Mumbai', state: 'Maharastra' } }

// **  Example 2: Rest in function parameters

// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10
// ...numbers collects all arguments into an array.

// ***********************************************************************************************

//  ! SPREAD OPERATOR (...) -> The spread operator expands or spreads the elements from an array (or object) into individual elements.
//  Common uses:
// ? Array concatenation or merging (Object Cloning)

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4]

// ** Object cloning or merging

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };

// console.log(merged); // { a: 1, b: 3, c: 4 }

// ** Passing array items as function arguments

// const numbers = [10, 20, 30];
// console.log(Math.max(...numbers)); // 30

// ***********************************************************************************************

// function greet(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// }

// const nameArr = ["Akshay", "Paul"];

// greet(...nameArr); // Hello, John Doe

// ***********************************************************************************************

// function printDetails(name, age, ...skills) {
//   console.log(`${name}, Age: ${age}`);
//   console.log(`Skills: ${skills.join("-")}`);
// }

// const personInfo = ["Alice", 30, "JS", "React", "Node"];

// printDetails(...personInfo);

// ***********************************************************************************************
// ! Real Use Case: Combining Both Array Destructuring and Rest Operator

function calculate(operation, ...numbers) {
  if (operation === "sum") {
    return numbers.reduce((a, b) => a + b);
  } else if (operation === "multiply") {
    return numbers.reduce((a, b) => a * b);
  }
}

let nums = [2, 3, 4];
console.log(calculate("sum", ...nums)); // 9
console.log(calculate("multiply", ...nums)); // 24

// *********************************************************************************************************

// ? If you came this Far then do subscribe and like the video, please let me know in the comments. and also  do subscribe and like the video. Thanks for watching :)

// *********************************************************************************************************
