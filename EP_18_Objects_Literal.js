// *********************************************************************************************************

// Kindly Comment all the running code and then start to use from the begning of the file

// *********************************************************************************************************

// JavaScript Objects – An object in JavaScript is a data structure that allows you to store multiple values as key-value pairs. It’s ideal for representing real-world entities like a person, car, book, etc.

// syntax :
const person = {
  name: "Akshay",
  age: 23,
  isStudent: true,
};

// Accessing properties
// Keys (also called properties) are always strings.
// Values can be any data type: string, number, array, function, etc.
// Use dot notation or bracket notation to access properties.

console.log(person.name); // "Akshay"
console.log(person["age"]); // 23

// Modifying properties
person.name = "Dhruvin";
person["age"] = 20;

// Adding new properties
person.country = "India";

// Deleting properties
delete person.isStudent;

console.log(person);

// Nested objects
const user = {
  name: "Akshay",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

// Accessing nested properties
console.log(user.address.city); // "New York"
console.log(user["address"]["city"]); // "New York"

// Modifying nested properties
user.address.city = "San Francisco";
user["address"]["state"] = "CA";

// Adding new nested properties
user.address.country = "USA";
user["email"] = "oZQ2a@example.com";
user["address"]["country"] = "USA";

// Deleting nested properties
delete user.address.country;
delete user["address"]["country"];
delete user.email;
delete user["email"];

console.log(user);

//  Iterating over properties using dot notation and bracket notation through loop
for (const key in user) {
  console.log(key, user[key]);
}

// Output:
// name Akshay
// age 23
// address {street: '123 Main St', city: 'San Francisco', state: 'CA'}
// address.city San Francisco
// address.state CA

// 4. Object Methods: Object.keys(), Object.values(), Object.entries()
// const user = { name: "Anna", age: 30 };

// Object.keys(obj) - Returns an array of the object’s own keys.
// console.log(Object.keys(user)); // ["name", "age"]

// Object.values(obj) - Returns an array of the object’s own values.
// console.log(Object.values(user));  // ["Anna", 30]

// Object.entries(obj) - Returns an array of the object’s own key-value pairs.
// console.log(Object.entries(user));  // [["name", "Anna"], ["age", 30]]

// 5. Object.freeze() and Object.seal()
// Object.freeze(obj) - Prevents the object from being modified.
// Object.seal(obj) - Prevents the object from being modified, but allows adding new properties.

// Destructuring Objects

const user = {
  name: "Akshay",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const { name, age, address } = user;
console.log(name); // "Akshay"
console.log(age); // 23
console.log(address); // {street: '123 Main St', city: 'New York', state: 'NY'}

//  Renaming During Destructuring

const { name: userName, age: userAge } = user;
console.log(userName); // "Akshay"
console.log(userAge); // 23

//  Nested Destructuring

// const {
//   address: { street, city, state },
// } = user;
// console.log(street); // "123 Main St"
// console.log(city); // "New York"
// console.log(state); // "NY"

// Project with real world example  - Mini Profile Viewer

const profile = {
  name: "Jane Doe",
  age: 28,
  skills: ["HTML", "CSS", "JavaScript"],
  contact: {
    email: "jane@example.com",
    github: "github.com/janedoe",
  },
};

function displayProfile(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Skills: ${user.skills.join(", ")}`);
  console.log(`Email: ${user.contact.email}`);
  console.log(`GitHub: ${user.contact.github}`);
}

displayProfile(profile);

// *********************************************************************************************************

// If you came this Far then do subscribe and like the video, please let me know in the comments. and also  do subscribe and like the video. Thanks for watching :)

// *********************************************************************************************************
