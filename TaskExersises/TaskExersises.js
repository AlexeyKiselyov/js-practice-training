// 1. ----Преобразовать строку "abC" => "A-Bb-Acc"...------

// Base
// function stringMutant(string) {
//   const arr = string.split("");
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     result.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
//   }

//   return result.join("-");
// }

// console.log(stringMutant("abcD"));

// Advance
// const stringMutant = (string) =>
//   string
//     .toUpperCase()
//     .split("")
//     .map((word, id) => `${word}${word.toLowerCase().repeat(id)}`)
//     .join("-");

// console.log(stringMutant("AdSdd"));

// 2. --- Является ли строка полиндромом---isPalindrome("шалаш")=> true

// basic
// function isPalindrome(string) {
//   const strReverse = string.split("").reverse().join("");
//   console.log(strReverse);
//   if (string === strReverse) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isPalindrome("алла");

// advanced
// const isPalindrome = (string) => {
//   const strReverse = string.split("").reverse().join("");
//   return console.log(string === strReverse);
// };
// isPalindrome("алла");

// ----Train setInterval and setTimeout-----

// const timer = setInterval(() => {
//   console.log("interval");
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 5000);

// 3. -----Функция поиска самого короткого первого слова-----

// with map

// const findShorterWord = (sentence) => {
//   let result = "";
//   sentence
//     .split(" ")
//     .reverse()
//     .map((word, id) => {
//       if (id === 0) {
//         result = word;
//         return;
//       }
//       if (word.length <= result.length) {
//         result = word;
//       }
//     });
//   return result;
// };

// console.log(findShorterWord("мама мыла раму не только ил"));

// with reduce

// const findShorterWord = (sentence) =>
//   sentence
//     .split(" ")
//     .reverse()
//     .reduce((acc, word) => {
//       if (word.length <= acc.length) {
//         acc = word;
//       }
//       return acc;
//     });

// console.log(findShorterWord("мама мыла раму не только ил"));

// with sort

// const findShorterWord = (sentence) =>
//   sentence.split(" ").sort((a, b) => a.length - b.length)[0];

// console.log(findShorterWord("мама мыла и раму не только ил"));

// 4. -----Создание инициалов имени из первых букв имени и фамилии------

// const createInitials = (nameSirnameString) =>
//   nameSirnameString
//     .split(" ")
//     .map((word) => word[0])
//     .join(".")
//     .toUpperCase();

// console.log(createInitials("Иван Иванович"));

// 5. ------Сумма частей вводимого числ без учета "-"-------

// basic

// const summDigits = (number) => {
//   let sum = 0;
//   const result = number
//     .toString()
//     .split("")
//     .map((el) => {
//       if (el === "-") return;
//       sum += Number(el);
//     });
//   return sum;
// };

// console.log(summDigits(-886));

// advance

// const summDigits = (number) =>
//   Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, el) => +acc + +el, 0);

// console.log(summDigits(-833));

// 6 ----Search the smallest and largest number in array----

// const array = [1,1];

// first option

// const minMaxNumber = (arr) => {
//   const result = [...arr].sort((a, b) => a - b);
//   return [result[0], result[result.length - 1]];
// };

// second option

// const minMaxNumber = (arr) => [Math.min(...arr), Math.max(...arr)];

// console.log(minMaxNumber(array));

// 7 ------Find inner array min sum---

// const arr = [
//   [1],
//   [15,5,33],
//   [5, 5, 6, 8],
//   [65, 45, 456],
// ];

// function minArrSum(arr) {
//   const arrModify = arr.map((numbers) =>
//     numbers.reduce((acc, number) => acc + number, 0)
//   );
//   const minArr = Math.min(...arrModify);
//   const indexOfMinArr = arrModify.indexOf(minArr);
//   return `Inner array with min sum has ${indexOfMinArr}th index and amount: ${minArr} `;
// }

// console.log(minArrSum(arr));

// 8------Create dublicate function----

// function dublicate(string) {
//   const result = string
//     .split("")
//     .map((el, ind) => `${el.toUpperCase() + el.repeat(ind).toLowerCase()}`)
//     .join("-");
//   return result;
// }
// console.log(dublicate("sdfWV"));

// 9 ------Responce arr with LowerCaseWords indexes------

// first option
// function lowerCaseWords(string) {
//   let result = [];

//   string.split("").forEach((el, idx) => {
//     if (el === el.toUpperCase()) {
//       result.push(idx);
//     }
//   });
//   return result;
// }

// second option
// const lowerCaseWords = (string) =>
//   string.split("").reduce((result, el, idx) => {
//     if (el === el.toUpperCase()) {
//       result.push(idx);
//     }
//     return result;
//   }, []);

// console.log(lowerCaseWords("nkLKnLn"));
