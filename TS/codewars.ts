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
