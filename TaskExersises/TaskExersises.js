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
