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

// 13------divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]----

// const divisibleBy = (a, b) => {
//   let result = [];
//   for (numb of a) {
//     if (numb % b === 0) {
//       result.push(numb);
//     }
//   }
//   return result;
// };

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));

// 14------Age when father was older then his son in hulf-----

// const findAge = (futherAge, sunAge) => (result = futherAge - sunAge * 2);

// console.log(findAge(40, 4));

// 15------Find odd numbers lower then param----

// const findOdd = (param) => {
//   let result = [];
//   for (let i = 1; i < param; i += 1) {
//     if (i % 2 !== 0) {
//       result.push(i);
//     }
//   }
//   return `Quantity of numbers: ${result.length}.\nTotal result ${result}`;
// };

// console.log(findOdd(9));

// 16-----Change string to number------

// const stringToNumb = (str) => Number(str);
// // const stringToNumb = (str) => Number.parseInt(str);
// console.log(stringToNumb("-72"));

// 17 ----Find index of nessesary number in Array------

// first option
// const findIndex = (arr, number) => arr.indexOf(number);

// second option
// const findIndex = (arr, number)=>{
//   for(let i=0; i<arr.length; i+=1){
//     if(arr[i]===number){
//       return i;
//     }
//   }
//   return -1;
// }

// const arr = [1,5,6,7,8,9,4,2,3,]
// console.log(findIndex(arr, 1));

// 18 ----Find all indexes of nessesary number in Array------

// first option
// const findIndexes = (arr, number) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === number) {
//       result.push(i);
//     }
//   }
//   return result.length ? result : -1;
// };

// second option
// const findIndexes = (arr, number) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === number) {
//       result.push(i);
//     }
//   }
//   return result.length
//     ? `Indexes of this number into this array are: ${result.join(",")} `
//     : "This array doesn't include this number";
// };

// const arr = [1, 5, 6, 7, 8, 9, 6, 2, 6];
// console.log(findIndexes(arr, 6));

// 19 ------Flat Arr------------
// const arrayOfArray = [[1, 2], [3, 4], [[5, 6]]];

// first option
// const flatArr = (arr) => arr.flatMap((el) => el);

// console.log(flatArr(arrayOfArray));

// second option
// const flatArr = (arr) => arr.reduce((acc,el) => [...acc,...el],[]);

// console.log(flatArr(arrayOfArray));

// 20 ------Arr to Object ------------

// const pairs = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];

// first option
// const arrToObj = (arr) =>
//   arr.reduce((acc, [key, prop]) => ({ ...acc, [key]: prop }), {});

//   console.log(arrToObj(pairs));

// 21 -------Find indexis of Upper Case letters--------

// const str = "cOddDJsdf";

// const findIndexis = (string) =>
//   string.split("").reduce((acc, letter, idx) => {
//     if (letter === letter.toUpperCase()) {
//       acc.push(idx);
//     }
//     return acc;
//   }, []);

// console.log(findIndexis(str));

// 22 ------Output numbers from 0 to n (if %3 = foo, if%5=bar, if%3,5=foobar)---

// const foobar = (numb) => {
//   let result = [];
//   for (let i = 1; i <= numb; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("foobar");
//     } else if (i % 3 === 0) {
//       result.push("foo");
//     } else if (i % 5 === 0) {
//       result.push("bar");
//     } else {
//       result.push(i);
//     }
//   }
//   return result.join(",");
// };

// console.log(foobar(15));

// 23--------Work with Date--------------

// //Find years range with Date:
// const yearsRangeFind = (date) => {
//   const year = date.getUTCFullYear();
//   const dateNow = new Date().getUTCFullYear();
//   const result = dateNow - date;
//   console.log(result);
// };

// //Find years range with string argument:

// const yearsRange = (dateString) => {
//   const date = new Date(dateString).getUTCFullYear();
//   const dateNow = new Date().getUTCFullYear();
//   const result = dateNow - date;
//   console.log(result);
// };
// yearsRange("2020-02-12");

// // Year number to string:
// const year = 15;

// const yearsToWord = (years) => {
//   let yearWord = "no data";

//   if (year < 0) {
//     yearWord = "wrong data of birthday";
//   } else if (year > 15) {
//     yearWord = "long-liver";
//   } else {
//     switch (year) {
//       case 0:
//         yearWord = "less then one year";
//         break;
//       case 1:
//         yearWord = "one year";
//         break;
//       case 2:
//         yearWord = "two years";
//         break;
//       case 3:
//         yearWord = "three years";
//         break;
//       case 4:
//         yearWord = "four years";
//         break;
//       case 5:
//         yearWord = "five years";
//         break;
//       case 6:
//         yearWord = "six years";
//         break;
//       case 7:
//         yearWord = "seven years";
//         break;
//       case 8:
//         yearWord = "eight years";
//         break;
//       case 9:
//         yearWord = "nine years";
//         break;
//       case 10:
//         yearWord = "ten years";
//         break;
//       case 11:
//         yearWord = "eleven years";
//         break;
//       case 12:
//         yearWord = "twelve years";
//         break;
//       case 13:
//         yearWord = "thirteen years";
//         break;
//       case 14:
//         yearWord = "fourteen years";
//         break;
//       case 15:
//         yearWord = "fifteen years";
//         break;
//       case 16:
//         yearWord = "sixteen years";
//         break;

//       default:
//         console.log("Some date error");
//     }
//   }
//   return yearWord;
// };

// console.log(yearsToWord(year));

// // Date format functions:
// // Date string to format dd.mm.yyyy
// function formatDate(date) {
//   let d = new Date(date),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [day, month, year].join(".");
// }
// console.log(formatDate("2020-02-12"));

// const date = new Date("2020-02-12");
// console.log(date);

// // Date  to format dd.mm.yyyy
// function formatDateFormat(date) {
//   let d = date,
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [day, month, year].join(".");
// }

// console.log(formatDateFormat(date));

// 24 --------revers() practic--------
// const notices = [
//   {
//     _id: "63c988064776c4b0ffd742f8",
//     title: "First Dog lost",
//     category: "lost-found",
//     name: "Bill",
//     birthdate: "2020-10-09T21:00:00.000Z",
//     breed: "Breed",
//     location: "Vorzel,Kyiv",
//     comments:
//       " Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet",
//     imgURL:
//       "https://res.cloudinary.com/dgne23at6/image/upload/v1674151945/168b05f192b8971e509a1a55d70a2bb9_esozbw.jpg",
//     owner: {
//       _id: "63c45001026dd5830f48ee1c",
//       name: "TestUserNotice",
//       email: "test@gmail.com",
//     },
//     createdAt: "2023-01-19T18:12:22.950Z",
//     updatedAt: "2023-01-19T18:12:22.950Z",
//   },

//   {
//     _id: "63c988884776c4b0ffd74302",
//     title: "Cat lost",
//     category: "lost-found",
//     name: "Monica",
//     birthdate: "2022-10-09T21:00:00.000Z",
//     breed: "Breed",
//     location: "Vorzel,Kyiv",
//     comments:
//       " Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet",
//     imgURL:
//       "https://res.cloudinary.com/dgne23at6/image/upload/v1674152075/4f8cff11728273263492d90a00813ac6_salwma.jpg",
//     owner: {
//       _id: "63c45001026dd5830f48ee1c",
//       name: "TestUserNotice",
//       email: "test@gmail.com",
//     },
//     createdAt: "2023-01-19T18:14:32.627Z",
//     updatedAt: "2023-01-19T18:14:32.627Z",
//   },
//   {
//     _id: "63ce9d268ab989895ee7ca17",
//     title: "hh",
//     category: "sell",
//     name: "gg",
//     birthdate: "2023-02-28T22:00:00.000Z",
//     breed: "jh",
//     sex: "male",
//     location: "Kharkiv, Kharkiv",
//     comments: "jjjjjjjjjj",
//     price: 1,
//     imgURL:
//       "http://res.cloudinary.com/digml0rat/image/upload/v1673906206/Fullstack%20Group%20Project/home-pets_hywfgq.png",
//     owner: {
//       _id: "63c45001026dd5830f48ee1c",
//       name: "TestUserNotice",
//       email: "test@gmail.com",
//     },
//     createdAt: "2023-01-23T14:43:50.180Z",
//     updatedAt: "2023-01-23T14:43:50.180Z",
//   },
//   {
//     _id: "63d2a25185a15b7213a2b318",
//     title: "Last hh",
//     category: "sell",
//     birthdate: "2023-01-07T22:00:00.000Z",
//     comments: "dhkjfdvkjdfv",
//     price: 1,
//     imgURL:
//       "http://res.cloudinary.com/digml0rat/image/upload/v1673906206/Fullstack%20Group%20Project/home-pets_hywfgq.png",
//     owner: {
//       _id: "63c45001026dd5830f48ee1c",
//       name: "TestUserNotice",
//       email: "test@gmail.com",
//     },
//     createdAt: "2023-01-26T15:54:57.642Z",
//     updatedAt: "2023-01-26T15:54:57.642Z",
//   },
// ];
// console.log(notices);

// const reversed = [...notices].reverse();
// console.log(reversed);
// console.log(notices);

// 25 -----unique number-------
// first option
// const uniqueNumbersArr = (...arg) =>
//   [...arg]
//     .join()
//     .split(",")
//     .filter((number, idx, arr) => arr.indexOf(number) === idx)
//     .sort((a, b) => a - b);

// console.log(uniqueNumbersArr([1, 8, 6], [2, 4, 8], [4, 9, 1]));

// second option
// const uniqueNumbersArr = (...arg) =>
//   [...new Set([...arg].flat())].sort((a, b) => a - b);

// console.log(uniqueNumbersArr([1, 8, 6], [2, 4, 8], [4, 9, 1]));

// 26 -----Mobile phone number from 9th numbers (xxx) xxx-xxx  -----

// first option
// const createPhoneNumber = (digits) => {
//   let result = ["("];
//   const arr = digits.toString().split("");
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (i === 2) {
//       result.push(arr[i].toString() + ")" + " ");
//     } else if (i === 5) {
//       result.push(arr[i].toString() + "-");
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result.join("");
// };

// console.log(createPhoneNumber(123456789));

// second option
// const createPhoneNumber = (digits) => {
//   const arr = digits.toString().split("");
//   const result=`(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}`
//   return result;
// };

// console.log(createPhoneNumber(123456789));

// third option

// const createPhoneNumber = (digits) => {
//   const string = digits.toString();
//   const result=`(${string.slice(0,3)}) ${string.slice(3,6)}-${string.slice(6,9)}`
//   return result;
// };

// console.log(createPhoneNumber((123456789);

// fourth option

// const createPhoneNumber = (digits) => {
//   const result = digits.toString().split("");
//   result.splice(0, 0, "(");
//   result.splice(4, 0, ")");
//   result.splice(5, 0, " ");
//   result.splice(9, 0, "-");
//   return result.join("");
// };

// console.log(createPhoneNumber(123456789));

// 27 -----Find vowels-------

// first option
// const findVowels = (string) => {
//   const result = string.match(/[aeiou]/gi);
//   return result ? result.length : 0;
// };

// console.log(findVowels("oueasd"));

// second option
// const findVowels = (string) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = 0;
//   for (const letter of string.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       result += 1;
//     }
//   }
//   return result;
// };

// console.log(findVowels("lklkjloo"));

// third option
// const findVowels = (string) => {
//   const result = string
//     .toLowerCase()
//     .split("")
//     .filter(
//       (letter) =>
//         letter === "a" ||
//         letter === "e" ||
//         letter === "i" ||
//         letter === "o" ||
//         letter === "u"
//     );
//   return result.length;
// };

// console.log(findVowels("millooeou"));

// fourth option
// const findVowels = (string) => {
//   const arr = string.toLowerCase().split("");
//   let result = 0;
//   for (const letter of arr) {
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
// };

// console.log(findVowels("mango"));

// 28 ----Sentence to capotal case-----

// first option
// const toCapitalCase = (sentence) =>
//   sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
//     .join(" ");
// console.log(toCapitalCase("Ssdd sdsd sdsd sdsdvv"));

// second option
// const toCapitalCase = (sentence) => {
//   const result = sentence.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ");
//   return result;
// };
// console.log(toCapitalCase("Ssdd sdsd sdsd sdsdvv"));

// 29 -------Polindrome--------------

// const findPolidrom = (str) => {
//   const reverseStr = str.split("").reverse().join("");
//   return reverseStr.toLowerCase() === str.toLowerCase();
// };
// console.log(findPolidrom("Alla"));

// polindrome task from freecodecamp
// const findPolidrom = (str) => {
//   const exceptions = [",", ".", " ", "_",":","-","/","(",")"];
//   const reverseStr = str.split("");
//   let arr = [];
//   for (const el of reverseStr) {
//     if (!exceptions.includes(el)) {
//       arr.push(el);
//     }
//   }
//   return [...arr].reverse().join("").toLowerCase()===arr.join("").toLowerCase();
// };
// console.log(findPolidrom("0_0 (: /-\ :) 0-0"));

// 30----------Convert To Roman------------

// first option
// const convertToRoman = (numb) => {
//   const arr = numb.toString().split("");
//   let result = [];
//   const createUnitNumb = (numb) => {
//     switch (numb) {
//       case "1":
//         result.push("I");
//         break;
//       case "2":
//         result.push("II");
//         break;
//       case "3":
//         result.push("III");
//         break;
//       case "4":
//         result.push("IV");
//         break;
//       case "5":
//         result.push("V");
//         break;
//       case "6":
//         result.push("VI");
//         break;
//       case "7":
//         result.push("VII");
//         break;
//       case "8":
//         result.push("VIII");
//         break;
//       case "9":
//         result.push("IX");
//         break;
//     }
//   };
//   const createDecimalNumb = (numb) => {
//     switch (numb) {
//       case "1":
//         result.push("X");
//         break;
//       case "2":
//         result.push("XX");
//         break;
//       case "3":
//         result.push("XXX");
//         break;
//       case "4":
//         result.push("XL");
//         break;
//       case "5":
//         result.push("L");
//         break;
//       case "6":
//         result.push("LX");
//         break;
//       case "7":
//         result.push("LXX");
//         break;
//       case "8":
//         result.push("LXXX");
//         break;
//       case "9":
//         result.push("XC");
//         break;
//     }
//   };
//   const createHundredNumb = (numb) => {
//     switch (numb) {
//       case "1":
//         result.push("C");
//         break;
//       case "2":
//         result.push("CC");
//         break;
//       case "3":
//         result.push("CCC");
//         break;
//       case "4":
//         result.push("CD");
//         break;
//       case "5":
//         result.push("D");
//         break;
//       case "6":
//         result.push("DC");
//         break;
//       case "7":
//         result.push("DCC");
//         break;
//       case "8":
//         result.push("DCCC");
//         break;
//       case "9":
//         result.push("CM");
//         break;
//     }
//   };
//   const createThousandNumb = (numb) => {
//     switch (numb) {
//       case "1":
//         result.push("M");
//         break;
//       case "2":
//         result.push("MM");
//         break;
//       case "3":
//         result.push("MMM");
//         break;
//     }
//   };
//   if (arr.length === 1) {
//     createUnitNumb(arr[0]);
//   }
//   if (arr.length === 2) {
//     createDecimalNumb(arr[0]);
//     createUnitNumb(arr[1]);
//   }
//   if (arr.length === 3) {
//     createHundredNumb(arr[0]);
//     createDecimalNumb(arr[1]);
//     createUnitNumb(arr[2]);
//   }
//   if (arr.length === 4) {
//     createThousandNumb(arr[0]);
//     createHundredNumb(arr[1]);
//     createDecimalNumb(arr[2]);
//     createUnitNumb(arr[3]);
//   }
//   return result.join("");
// };

// console.log(convertToRoman(3999));

// second option not optimaze
// const convertToRoman = (numb) => {
//   const arr = numb.toString().split("");
//   let result = [];
//   if (arr.length === 1) {
//     switch (arr[0]) {
//       case "1":
//         result.push("I");
//         break;
//       case "2":
//         result.push("II");
//         break;
//       case "3":
//         result.push("III");
//         break;
//       case "4":
//         result.push("IV");
//         break;
//       case "5":
//         result.push("V");
//         break;
//       case "6":
//         result.push("VI");
//         break;
//       case "7":
//         result.push("VII");
//         break;
//       case "8":
//         result.push("VIII");
//         break;
//       case "9":
//         result.push("IX");
//         break;
//     }
//   }
//   if (arr.length === 2) {
//     switch (arr[0]) {
//       case "1":
//         result.push("X");
//         break;
//       case "2":
//         result.push("XX");
//         break;
//       case "3":
//         result.push("XXX");
//         break;
//       case "4":
//         result.push("XL");
//         break;
//       case "5":
//         result.push("L");
//         break;
//       case "6":
//         result.push("LX");
//         break;
//       case "7":
//         result.push("LXX");
//         break;
//       case "8":
//         result.push("LXXX");
//         break;
//       case "9":
//         result.push("XC");
//         break;
//     }
//     switch (arr[1]) {
//       case "1":
//         result.push("I");
//         break;
//       case "2":
//         result.push("II");
//         break;
//       case "3":
//         result.push("III");
//         break;
//       case "4":
//         result.push("IV");
//         break;
//       case "5":
//         result.push("V");
//         break;
//       case "6":
//         result.push("VI");
//         break;
//       case "7":
//         result.push("VII");
//         break;
//       case "8":
//         result.push("VIII");
//         break;
//       case "9":
//         result.push("IX");
//         break;
//     }
//   }
//   if (arr.length === 3) {
//     switch (arr[0]) {
//       case "1":
//         result.push("C");
//         break;
//       case "2":
//         result.push("CC");
//         break;
//       case "3":
//         result.push("CCC");
//         break;
//       case "4":
//         result.push("CD");
//         break;
//       case "5":
//         result.push("D");
//         break;
//       case "6":
//         result.push("DC");
//         break;
//       case "7":
//         result.push("DCC");
//         break;
//       case "8":
//         result.push("DCCC");
//         break;
//       case "9":
//         result.push("CM");
//         break;
//     }
//     switch (arr[1]) {
//       case "1":
//         result.push("X");
//         break;
//       case "2":
//         result.push("XX");
//         break;
//       case "3":
//         result.push("XXX");
//         break;
//       case "4":
//         result.push("XL");
//         break;
//       case "5":
//         result.push("L");
//         break;
//       case "6":
//         result.push("LX");
//         break;
//       case "7":
//         result.push("LXX");
//         break;
//       case "8":
//         result.push("LXXX");
//         break;
//       case "9":
//         result.push("XC");
//         break;
//     }
//     switch (arr[2]) {
//       case "1":
//         result.push("I");
//         break;
//       case "2":
//         result.push("II");
//         break;
//       case "3":
//         result.push("III");
//         break;
//       case "4":
//         result.push("IV");
//         break;
//       case "5":
//         result.push("V");
//         break;
//       case "6":
//         result.push("VI");
//         break;
//       case "7":
//         result.push("VII");
//         break;
//       case "8":
//         result.push("VIII");
//         break;
//       case "9":
//         result.push("IX");
//         break;
//     }
//   }
//   if (arr.length === 4) {
//     switch (arr[0]) {
//       case "1":
//         result.push("M");
//         break;
//       case "2":
//         result.push("MM");
//         break;
//       case "3":
//         result.push("MMM");
//         break;
//     }
//     switch (arr[1]) {
//       case "1":
//         result.push("C");
//         break;
//       case "2":
//         result.push("CC");
//         break;
//       case "3":
//         result.push("CCC");
//         break;
//       case "4":
//         result.push("CD");
//         break;
//       case "5":
//         result.push("D");
//         break;
//       case "6":
//         result.push("DC");
//         break;
//       case "7":
//         result.push("DCC");
//         break;
//       case "8":
//         result.push("DCCC");
//         break;
//       case "9":
//         result.push("CM");
//         break;
//     }
//     switch (arr[2]) {
//       case "1":
//         result.push("X");
//         break;
//       case "2":
//         result.push("XX");
//         break;
//       case "3":
//         result.push("XXX");
//         break;
//       case "4":
//         result.push("XL");
//         break;
//       case "5":
//         result.push("L");
//         break;
//       case "6":
//         result.push("LX");
//         break;
//       case "7":
//         result.push("LXX");
//         break;
//       case "8":
//         result.push("LXXX");
//         break;
//       case "9":
//         result.push("XC");
//         break;
//     }
//     switch (arr[3]) {
//       case "1":
//         result.push("I");
//         break;
//       case "2":
//         result.push("II");
//         break;
//       case "3":
//         result.push("III");
//         break;
//       case "4":
//         result.push("IV");
//         break;
//       case "5":
//         result.push("V");
//         break;
//       case "6":
//         result.push("VI");
//         break;
//       case "7":
//         result.push("VII");
//         break;
//       case "8":
//         result.push("VIII");
//         break;
//       case "9":
//         result.push("IX");
//         break;
//     }
//   }
//   return result.join("");
// };

// console.log(convertToRoman(3999));