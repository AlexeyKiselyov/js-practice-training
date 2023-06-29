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
