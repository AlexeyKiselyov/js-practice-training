// ---------Vowel Count-------------

// function getCount(str: string): number {
//   const vowelsList = ['a', 'e', 'i', 'o', 'u'];

//   return str.split('').reduce((acc, char: string) => {
//     if (vowelsList.includes(char)) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }

// console.log(getCount('abracadabra'));

// -----------Split Strings----------

// 1st option
// function solution(str: string): string[] {
//   const result: string[] = [];

//   str.split('').forEach((char, ind, arr) => {
//     if (ind % 2 === 0) {
//       result.push(char + (arr[ind + 1] || '_'));
//     }
//   });

//   return result;
// }

// 2nd option
// function solution(str: string): string[] {
//   const splitedStr = str.split('');

//   return splitedStr
//     .map((char, ind) => char + (splitedStr.splice(ind + 1, 1)[0] || '_'))
//     .filter(el => el);
// }

// 3rd option
// function solution(str: string): string[] {
//   let tempStr: string = '';
//   const result: string[] = [];

//   str.split('').forEach((char, ind, arr) => {
//     if (ind % 2 !== 0) {
//       tempStr += char;
//       result.push(tempStr);
//       tempStr = '';
//     } else if (ind === arr.length - 1 && ind % 2 === 0) {
//       result.push(char + '_');
//     } else {
//       tempStr += char;
//     }
//   });

//   return result;
// }

// console.log(solution('abc')); // ['ab', 'c_']
// console.log(solution('abcdef')); // ['ab', 'cd', 'ef']

//-----Calculating with Functions----

// type Operation = (operand: number) => number;

// function zero(operation?: Operation): number {
//   return operation ? operation(0) : 0;
// }
// function one(operation?: Operation): number {
//   return operation ? operation(1) : 1;
// }
// function two(operation?: Operation): number {
//   return operation ? operation(2) : 2;
// }
// function three(operation?: Operation): number {
//   return operation ? operation(3) : 3;
// }
// function four(operation?: Operation): number {
//   return operation ? operation(4) : 4;
// }
// function five(operation?: Operation): number {
//   return operation ? operation(5) : 5;
// }
// function six(operation?: Operation): number {
//   return operation ? operation(6) : 6;
// }
// function seven(operation?: Operation): number {
//   return operation ? operation(7) : 7;
// }
// function eight(operation?: Operation): number {
//   return operation ? operation(8) : 8;
// }
// function nine(operation?: Operation): number {
//   return operation ? operation(9) : 9;
// }

// function plus(rightOperand: number): Operation {
//   return function (leftOperand: number): number {
//     return leftOperand + rightOperand;
//   };
// }

// function minus(rightOperand: number): Operation {
//   return function (leftOperand: number): number {
//     return leftOperand - rightOperand;
//   };
// }

// function times(rightOperand: number): Operation {
//   return function (leftOperand: number): number {
//     return Math.floor(leftOperand * rightOperand);
//   };
// }

// function dividedBy(rightOperand: number): Operation {
//   return function (leftOperand: number): number {
//     if (rightOperand === 0) {
//       throw new Error('Cannot divide by zero');
//     }
//     return Math.floor(leftOperand / rightOperand);
//   };
// }

// console.log(seven(times(five()))); // must return 35
// console.log(four(plus(nine()))); // must return 13
// console.log(eight(minus(three()))); // must return 5
// console.log(six(dividedBy(two()))); // must return 3

// ------------The Hashtag Generator---------

// first option
// function generateHashtag(str: string): string | boolean {
//   const createOneWord = str
//     .split(' ')
//     .filter(word => word)
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join('');

//   const result = '#' + createOneWord;

//   return !createOneWord || result.length > 140 ? false : result;
// }

// second option
// let generateHashtag: (str: string) => string | boolean;

// generateHashtag = str => {
//   const result = str
//     .split(' ')
//     .reduce(
//       (tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1),
//       '#'
//     );

//   return result.length === 1 || result.length > 140 ? false : result;
// };

// console.log(generateHashtag(' Hello there thanks for trying my Kata')); //"#HelloThereThanksForTryingMyKata"
// console.log(generateHashtag('    hello     World   ')); //"#HelloWorld"
// console.log(generateHashtag('')); //false

// ----------Sort the odd-----------

// 1st option
// function sortArray(array: number[]): (number | undefined)[] {
//   const sortedOddNumbs = array.filter(numb => numb % 2).sort((a, b) => a - b);
//   return array.map(numb => (numb % 2 !== 0 ? sortedOddNumbs.shift() : numb));
// }

// 2nd option
// function sortArray(array: number[]): (number | undefined)[] {
//   const arrOfOddNumbs: number[] = [];
//   const arrWithoutOddNumbs = array.map(numb => {
//     if (numb % 2 !== 0) {
//       arrOfOddNumbs.push(numb);
//       return '-';
//     } else {
//       return numb;
//     }
//   });
//   const arrOfSortedOddNumbs = arrOfOddNumbs.sort();
//   const result = arrWithoutOddNumbs.map(item => {
//     if (typeof item === 'string') {
//       return arrOfSortedOddNumbs.shift();
//     }
//     return item;
//   });

//   return result;
// }

// console.log(sortArray([7, 1])); //[1, 7]
// console.log(sortArray([5, 8, 6, 3, 4])); //[3, 8, 6, 5, 4]
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ---------------Pete, the baker-----------

// 1st option
// const cakes = (
//   recipe: { [x: string]: number },
//   available: { [x: string]: number }
// ): number =>
//   Math.min(
//     ...Object.keys(recipe).map(key =>
//       Math.floor(available[key] / recipe[key] || 0)
//     )
//   );

// second option
// function cakes(
//   recipe: { [x: string]: number },
//   available: { [x: string]: number }
// ): number {
//   let noMoreIngreds = false;
//   let counter = 0;
//   let ingreds = { ...available };

//   while (!noMoreIngreds) {
//     Object.keys(recipe).forEach(key => {
//       if (ingreds[key]) {
//         ingreds[key] -= recipe[key];
//       } else {
//         noMoreIngreds = true;
//       }
//     });
//     if (noMoreIngreds) break;
//     const checkInreds = Object.values(ingreds).some(ingred => ingred < 0);
//     checkInreds ? (noMoreIngreds = true) : counter++;
//   }

//   return counter;
// }

// // must return 2
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );
// // must return 0
// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );
