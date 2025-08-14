// JS arrays MasterClass : Real world examples and practice questions along with Interview Quesitons

// Sample Data

const users = [
  { name: "Akshay", age: 23, isAdmin: false },
  { name: "Dhruvin", age: 20, isAdmin: false },
  { name: "Harsh", age: 19, isAdmin: true },
  { name: "Sahdev", age: 18, isAdmin: true },
  { name: "Shubham", age: 22, isAdmin: false },
];

// common methods with real world examples and practice questions

// 1) using map method to get all the names
// users.map((user) => {
//   console.log(user.name);
// });

// ****************************************************************************************************************

// 2) using sort method to sort the data based on age of users in ascending order and decending order as well
// const sortingData = users.sort((a, b) => a.age - b.age);
// console.log("sortingData: ", sortingData);

// ****************************************************************************************************************

// find -> return the first match item from the array of objects based on the condition passed to it

// const findAdmin = users.find((user) => {
//   return user.isAdmin;
// });
// console.log("findAdmin: ", findAdmin);

// ****************************************************************************************************************

// filter : get all matching items from the array of objects based on the condition passed to it

// const findAdmin = users.filter((user) => {
//   //   return user.isAdmin;
//   return user.age > 20;
// });
// console.log("findAdmin: ", findAdmin);

// ****************************************************************************************************************
// includes() : check if a value extist or not in an array of objects

// const findData = users.map((items) => items.name);
// console.log("findData: ", findData.includes("Akshay"));

// ****************************************************************************************************************

// findIndex() -> Return the index of the first match item from the array of objects based on the condition passed to it

// const findAdmin = users.findIndex((user) => {
//   return user.isAdmin;
// });
// console.log("findAdmin: ", findAdmin);

// ****************************************************************************************************************

// update an obj inside an array of objects
// const index = users.findIndex((users) => users.name === "Harsh");

// if (index) {
//   users[index] = { ...users[index], name: "Rahul" };
// }
// console.log("users: ", users);

// if (index !== -1) {
//   users[index] = { ...users[index], name: "Rahul" };
// }
// console.log("users: ", users);

// ****************************************************************************************************************
// Interview Questions

// 1) Sort an array of objects based on the age of the users
// 2) Find a user that is admin in an array of objects
// 3) Find if the user is present or not
// 4) Find the total age of all users in an array of objects
// 5) Update an obj inside an array

// If you came across any other interview questions related to arrays, please let me know in the comments. and also if you came this far then do subscribe and like the video. Thanks for watching :)

// ****************************************************************************************************************
