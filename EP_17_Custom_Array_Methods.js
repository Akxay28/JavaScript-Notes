// What are Higher Order Functions

// A higher-order function is a function that takes one or more  function as an argument, or returns a function as its result

// ************************************************************************************************************

// custom my map function

// const ary = [1, 2, 3, 4];

// ary.map((items, index, ary) => {
//   console.log("index: ", index, "items: ", items, "ary", ary);
// });

// function myMapFunction(array, callback) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const value = callback(array[i], i, array);
//     result.push(value);
//   }
//   return result;
// }

// const doubled = myMapFunction(ary, function (item, index, ary) {
//   return item * 2;
// });

// console.log("doubled: ", doubled);

// *************************************************************************************************************

// custom my filter function

// const ary = [1, 2, 3, 4];

// const filteredNumber = ary.filter((items) => {
//   return items >= 3;
// });
// console.log("filteredNumber: ", filteredNumber);

// function myFilter(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// const filteredNumber = myFilter(ary, function (item) {
//   return item >= 3;
// });
// console.log("filteredNumber: ", filteredNumber);

// ************************************************************************************************************

// Normal ForEach Functions

// const result = ary.forEach((items) => {
//   return items;
// });
// console.log("result: ", result);

// custom my forEach function

const ary = [1, 2, 3, 4];

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const result = myForEach(ary, function (item) {
  return item;
});

console.log("result: ", result);

// *********************************************************************************************************

// If you came across any other interview questions related to arrays, please let me know in the comments. and also if you came this far then do subscribe and like the video. Thanks for watching :)

// *********************************************************************************************************
