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
