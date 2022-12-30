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

// 10 ---Console numbers. If number /3 - fizz, /5 -buzz, /3&/5 - fizzbuzz---
// function fizzbuzz(number) {
//   for (let i = 1; i <= number; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(15);

// 11 ----Find annagram----

// first option
// function findAnnagram(string1, string2) {
//   const sortFirstString = string1
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("")
//     .replace(/[^\w\s]|_/g, "")
//     .trim();
//   console.log(sortFirstString);
//   const sortSecondString = string2
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("")
//     .replace(/[^\w\s]|_/g, "")
//     .trim();
//   console.log(sortFirstString === sortSecondString);
// }
// findAnnagram("Anna /1..3';  ", "an1an3   ");

// second option (not my version)

// const objBilder = (str) => {
//   const obj = {};
//   console.log(str.replace(/[^\w]/g).toLowerCase());
//   for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// };

// const anagram = (strA, strB) => {
//   const objA = objBilder(strA);
//   const objB = objBilder(strB);
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }
//   for (let char in objA) {
//     if (objA[char] !== objB[char]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(anagram("anna", "anan"));

// 11 ------Find vowel letters--------

// function findVowel(str) {
//   let result = 0;
//   for (let letter of str) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       result += 1;
//     }
//   }
//   return result;
// }

// console.log(findVowel("string"));

// second option

// function findVowel(str) {
//   let result = 0;
//   const vowel = ["a", "e", "i", "o", "u"];
//   for (let letter of str) {
//     if (vowel.includes(letter)) {
//       result += 1;
//     }
//   }
//   return result;
// }

// console.log(findVowel("sting"));

// third option

// function findVowel(str) {
//   const result = str.match(/[aeiou]/gi);
//   return result ? result.length : 0;
// }

// console.log(findVowel("sting"));

// 12--------Fobonachi---------

// first option
// function fibonachi(numb) {
//   let result = [0, 1];
//   if (numb === 0 || numb === 1) {
//     return 0;
//   }
//   if (numb === 2) {
//     return 1;
//   }
//   for (let i = 1; i <= numb; i += 1) {
//     result.push(result[i] + result[i - 1]);
//   }
//   return result.join(",");
// }

// console.log(fibonachi(3));

// second option

// function fibonachi(numb) {
//   if (numb < 2) {
//     return numb;
//   }

//   return fibonachi(numb - 1) + fibonachi(numb - 2);
// }

// console.log(fibonachi(8));
