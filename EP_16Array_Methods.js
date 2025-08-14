// JavaScript Array Iteration Methods and Loops - Notes
// Array iteration methods are essential tools that allow us to loop through arrays efficiently, writing cleaner and more readable code.

// ****************************************************************************************************************

//   1. for loop -> General purpose looping, flexible and commonly used.
// var ary = [1, 2, 3, 4, 5];
// for (let index = 0; index < ary.length; index++) {
//   const element = ary[index];
//   console.log("element: ", element);
// }

// ****************************************************************************************************************
//   2. forEach ->Purpose: Executes a function once for each array element.
// Note: Doesn't return anything useful (i.e., returns undefined)

// var ary = [1, 2, 3, 4, 5];
// const ans = ary.forEach((element) => {
//   return element;
// });
// console.log("ans: ", ans);

// ****************************************************************************************************************

//   3. for of ->  Loop over values (great for arrays)

// var ary = [1, 2, 3, 4, 5];
// for (const element of ary) {
//   console.log(element);
// }

// ****************************************************************************************************************

//   4. for in ->  Loops over keys (indexes) in arrays or properties in objects.
// ⚠️ Not recommended for arrays.

// var ary = [1, 2, 3, 4, 5];

// we only get Index from this array
// for (const key in ary) {
//   console.log(key);
// }

// we get Index and Values
// for (const key in ary) {
//   console.log(key, ary[key]);
// }

// ****************************************************************************************************************

//   5. map -> Returns a new array of the same length as the original array

// i) Condition based mapping of array

// var ary = [1, 2, 3, 4, 5];
// const mapFun = ary.map((items) => {
//   return items >= 3;
// });
// console.log("mapFun: ", mapFun);

// ii) Without condition based mapping of array

// var ary = [1, 2, 3, 4, 5];
// const mapFun = ary.map((items) => {
//   console.log(items);
// });

// ****************************************************************************************************************

//   6. filter ->Returns the first element that satisfies a condition or pass a test.

// var ary = [1, 2, 3, 4, 5];
// const evenNum = ary.filter((items) => {
//   return items % 2 === 0;
// });
// console.log("evenNum : ", evenNum);

// ****************************************************************************************************************

//   7. reduce -> Applies a function against an accumulator and each element to reduce to a single value.

// var ary = [1, 2, 3, 4, 5];
// const sum = ary.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log("sum: ", sum);

// Useful for totals, averages, grouping, etc.

// ****************************************************************************************************************

//   8. find -> Returns the first element that satisfies a condition

// var ary = [1, 2, 4, 5];
// const foundNum = ary.find((num) => {
//   return num >= 3;
// });
// console.log('foundNum: ', foundNum);

// ****************************************************************************************************************

//   9.  some -> Returns true if at least one element passes the test.

// var ary = [1, 2, 4, 50];
// const sum = ary.some((num) => {
//   return num > 40;
// });
// console.log("sum: ", sum);

// ****************************************************************************************************************
// 10. every -> Returns true if all elements pass the test..

// var ary = [100, 200, 400, 50];
// const sum = ary.every((num) => {
//   return num > 40;
// });

// console.log("sum: ", sum);

// ****************************************************************************************************************

// ## Summary Table

// | Method     | Returns        | Use-case                               |
// | ---------- | -------------- | -------------------------------------- |
// | `for`      | None           | General-purpose, flexible loop         |
// | `forEach`  | `undefined`    | Side-effects like logging              |
// | `for...of` | None           | Looping over values (arrays)           |
// | `for...in` | None           | Looping over object keys (not arrays!) |
// | `map`      | New array      | Transforming data                      |
// | `filter`   | Filtered array | Selecting certain elements             |
// | `reduce`   | Single value   | Summing, combining                     |
// | `find`     | First match    | Finding a specific item                |
// | `some`     | Boolean        | If **any** match the condition         |
// | `every`    | Boolean        | If **all** match the condition         |
