//-----------Square Every Digit-----------

// function squareDigits(num) {
//   const result = String(num)
//     .split('')
//     .map(number => Math.pow(number, 2))
//     .join('');
//   return Number(result);
// }

// console.log(squareDigits(3212));

// ------------Counting Duplicates------------

// function duplicateCount(text) {
//   const textToArray = text.toLowerCase().split('');

//   const obj = textToArray.reduce((acc, item) => {
//     if (!acc[item]) {
//       acc[item] = 1;
//     } else {
//       acc[item] += 1;
//     }
//     return acc;
//   }, {});

//   const objValues = Object.values(obj);

//   const result = objValues.filter(item => item > 1);

//   return result.length;
// }

// console.log(duplicateCount('aabbcde'));

// ----------Beginner Series #3 Sum of Numbers---------

// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }

//   let result = 0;

//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       result += i;
//     }
//   } else {
//     for (let i = b; i <= a; i++) {
//       result += i;
//     }
//   }

//   return result;
// }

// console.log(getSum(-1, 2));
// console.log(getSum(0, -1));
// console.log(getSum(0, 0));

// -----------Is this a triangle?------------

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
