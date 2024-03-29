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

// third option
// const isAnnagram = (str1, str2) =>
//   str1
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
//     .replace(/[^\w\s]|_/g, '')
//     .trim() ===
//   str2
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
//     .replace(/[^\w\s]|_/g, '')
//     .trim();

// console.log(isAnnagram('  Anna', 'nana'));

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
// const convertToRoman = (num) => {
//   const ref = [
//     ["M", 1000],
//     ["CM", 900],
//     ["D", 500],
//     ["CD", 400],
//     ["C", 100],
//     ["XC", 90],
//     ["L", 50],
//     ["XL", 40],
//     ["X", 10],
//     ["IX", 9],
//     ["V", 5],
//     ["IV", 4],
//     ["I", 1],
//   ];
//   let res = [];
//   ref.forEach((el) => {
//     while (num >= el[1]) {
//       res.push(el[0]);
//       num -= el[1];
//     }
//   });
//   return res.join("");
// };

// console.log(convertToRoman(10));

// second option
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

// third option not optimaze
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

//31 ------Cipher Cesare--------

// first option
// const cipher = {
//   A: "N",
//   B: "O",
//   C: "P",
//   D: "Q",
//   E: "R",
//   F: "S",
//   G: "T",
//   H: "U",
//   I: "V",
//   J: "W",
//   K: "X",
//   L: "Y",
//   M: "Z",
//   N: "A",
//   O: "B",
//   P: "C",
//   Q: "D",
//   R: "E",
//   S: "F",
//   T: "G",
//   U: "H",
//   V: "I",
//   W: "J",
//   X: "K",
//   Y: "L",
//   Z: "M",
// };

// const cipherCesare = (str) => {
//   const arr = str.split("");
//   const result = arr.map((letter) => {
//     if (cipher.hasOwnProperty(letter)) {
//       letter = cipher[letter];
//     }
//     return letter;
//   });
//   return result.join("");
// };

// console.log(cipherCesare("SERR PBQR PNZC"))

// second option
// const cipherCesare = (str) => {
//   const cipher = [
//     ["A", "N"],
//     ["B", "O"],
//     ["C", "P"],
//     ["D", "Q"],
//     ["E", "R"],
//     ["F", "S"],
//     ["G", "T"],
//     ["H", "U"],
//     ["I", "V"],
//     ["J", "W"],
//     ["K", "X"],
//     ["L", "Y"],
//     ["M", "Z"],
//     ["N", "A"],
//     ["O", "B"],
//     ["P", "C"],
//     ["Q", "D"],
//     ["R", "E"],
//     ["S", "F"],
//     ["T", "G"],
//     ["U", "H"],
//     ["V", "I"],
//     ["W", "J"],
//     ["X", "K"],
//     ["Y", "L"],
//     ["Z", "M"],
//   ];
//   const exceptions = [" ", ",", ".", "!", "?"];
//   const arr = str.split("");
//   let result = [];
//   for (const letter of arr) {
//     if (exceptions.includes(letter)) {
//       result.push(letter);
//     } else {
//       for (const el of cipher) {
//         if (el[0] === letter.toUpperCase()) {
//           result.push(el[1]);
//         }
//       }
//     }
//   }
//   return result.join("");
// };
// console.log(cipherCesare("SERR PBQR PNZC")); //FREE CODE CAMP (13=>; A=>N)

// 32 ------Telephone Check-------------

// first option

// const regexprs = [
//   /^\d{3}-\d{3}-\d{4}$/,
//   /^\(\d{3}\)\d{3}-\d{4}$/,
//   /^\(\d{3}\) \d{3}-\d{4}$/,
//   /^\d{3} \d{3} \d{4}$/,
//   /^\d{10}$/,
//   /^1 \d{3} \d{3} \d{4}$/,
//   /^1 \d{3}-\d{3}-\d{4}$/,
//   /^1 \(\d{3}\) \d{3}-\d{4}$/,
//   /^1\(\d{3}\)\d{3}-\d{4}$/,
// ];

// const telephoneCheck = (str) => {
//     let result = false;
//   for (const exp of regexprs){
//     if(exp.test(str)){
//       result = true;
//     }
//   }
//   return result;
// };

// console.log(telephoneCheck("1(555)555-5555"));

// second option

// const regexp =
//   /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

// const telephoneCheck = (str) => {
//   return regexp.test(str);
// };

// console.log(telephoneCheck("1(555)555-5555"));

// 33---------Check Cash Register----------//freecodecamp

// const moneyObj = [
//   { name: 'ONE HUNDRED', val: 100 },
//   { name: 'TWENTY', val: 20 },
//   { name: 'TEN', val: 10 },
//   { name: 'FIVE', val: 5 },
//   { name: 'ONE', val: 1 },
//   { name: 'QUARTER', val: 0.25 },
//   { name: 'DIME', val: 0.1 },
//   { name: 'NICKEL', val: 0.05 },
//   { name: 'PENNY', val: 0.01 },
// ];

// function checkCashRegister(price, cash, cid) {
//   const output = { status: null, change: [] };
//   let change = cash - price;
//   const register = cid.reduce(
//     (acc, curr) => {
//       acc.total += curr[1];
//       acc[curr[0]] = curr[1];
//       return acc;
//     },
//     { total: 0 }
//   );

//   if (register.total === change) {
//     output.status = 'CLOSED';
//     output.change = cid;
//     return output;
//   }

//   if (register.total < change) {
//     output.status = 'INSUFFICIENT_FUNDS';
//     return output;
//   }

//   const change_arr = moneyObj.reduce((acc, curr) => {
//     let value = 0;
//     while (register[curr.name] > 0 && change >= curr.val) {
//       change -= curr.val;
//       register[curr.name] -= curr.val;
//       value += curr.val;
//       change = Math.round(change * 100) / 100;
//     }

//     if (value > 0) {
//       acc.push([curr.name, value]);
//     }

//     return acc;
//   }, []);

//   if (change_arr.length < 1 || change > 0) {
//     output.status = 'INSUFFICIENT_FUNDS';
//     return output;
//   }
//   output.status = 'OPEN';
//   output.change = change_arr;
//   return output;
// }

// console.log(
//   checkCashRegister(19.5, 30, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// 34--------- JS tasks--------------

// 1st
// function doReverse(p1) {
//   return p1.split("").reverse().join("")
// }
// function someFunction(p1, p2, p3) {
//   p1 = doReverse(p1);
//   p2 = ['1', '2', '3'];
//   p3.push('9999');
// }
// let a = 'xyz';
// let b = ['123', '567'];
// let c = ['abc', 'def'];
// someFunction(a, b, c);
// // answer
// console.log(a); //'xyz'
// console.log(b); //['123', '567']
// console.log(c); //['abc', 'def',"9999"

// 2d
// var number = 10;
// var display = function () {
//   console.log(number);
//   var number = 20;
// };
// // answer
// display(); //undefind

// 3d
// async function callMe() {
//   console.log(1);
//   try {
//     await crazyFunction();
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(3);
// }
// function crazyFunction() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(2);
//       rej("promise err")
//     }, 1000);
//   });
// }
// callMe();
// //  1=>2=>3

// 35--------- Create generator--------------
// 1
// const sequence = (start = 0, step = 1) => {
//   let counter = 0;
//   return () => (!counter ? (counter = start) : (counter += step));
// };

// const generator = sequence(10, 3);
// const generator1 = sequence(7, 1);

// // 2
// const take = (gen, x = 1) => {
//   let result = [];
//   while (x) {
//     result.push(gen());
//     x -= 1;
//   }
//   return result;
// };
// const gen1 = sequence(0, 2);
// console.log(gen1);
// console.log(take(gen1, 5)); // [0, 2, 4, 6, 8 ]

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = arr1 + arr2;
// console.log(arr3);

// Random array generator for 1 to n with natural numbers

// const randomArr = n => {
//   const arrLength = n + 1;
//   let resultArr = [];
//   const getRandomInt = (min = 1, max = n) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   for (i = 1; i <= arrLength; i += 1) {
//     resultArr.push(getRandomInt(1, n));
//   }
//   return resultArr;
// };

// 36--------- Find max number sum in arr interval (from tech interv)------------

// const arr = [1, 6, 3, -5, 7, -9, 4, 3];

// first option
// const findMaxNumbersInterval = arr => {
//   if (arr.length === 0) {
//     return 'Empty array';
//   }

//   let currentSumm = 0;
//   let maxSumm = 0;

//   let currentStartInd = 0;
//   let startInd = 0;
//   let endInd = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0 && !currentSumm) {
//       continue;
//     }

//     if (!endInd && !currentSumm) {
//       currentStartInd = i;
//     }

//     currentSumm += arr[i];

//     if (maxSumm < currentSumm) {
//       maxSumm = currentSumm;
//       startInd = currentStartInd;
//       endInd = i;
//     }

//     if (currentSumm <= 0) {
//       currentSumm = 0;
//       currentStartInd = i + 1;
//     }
//   }
//   return `Max summ: ${maxSumm}. Interval from ${startInd} to ${endInd} array indexes`;
// };

// second option (with forEach)
// const findMaxNumbersInterval = arr => {
//   if (!arr.length) {
//     return 'Array is empty';
//   }

//   let currentSum = 0;
//   let maxSum = 0;

//   let currentStartInd = 0;
//   let startInd = 0;
//   let endInd = 0;

//   arr.forEach((el, ind) => {
//     if (el <= 0 && !maxSum) {
//       return;
//     }

//     if (!currentStartInd && !maxSum) {
//       currentStartInd = ind;
//     }

//     currentSum += el;

//     if (maxSum <= currentSum) {
//       maxSum = currentSum;
//       startInd = currentStartInd;
//       endInd = ind;
//     }

//     if (currentSum <= 0) {
//       currentSum = 0;
//       currentStartInd = ind + 1;
//     }
//   });

//   return `Sum ${maxSum}.Interval from ${startInd} to ${endInd} indexes`;
// };

// console.log(findMaxNumbersInterval(arr));

// -------------Task about twoo objects (from tech interv) -----------

// let foo = { n: 1 };
// let boo = foo;
// boo.x = foo = { n: 5 };

// console.log('foo', foo);
// console.log('boo', boo);

// 1. Выделили для переменной foo ячейку памяти и записали в нее объект.
// 2.Переменной boo присвоили ссылку на ячейку памяти, занятую объектом foo.
// 3. Добавили ключ объекту boo со значением объекта foo и тут же создали новую ячейку в памяти для переменной foo, в которую записали новый объект.
// 4. В переменной boo осталась прежняя ссылка на первый объект
// 5. Переменная foo получила новую ячеку в памяти и ссылки между двумя этими объектами теперь разные.

// range func

// // 1st
// const arrResult = [];
// for (let i = 0; i <= 5; i++) {
//   arrResult.push(i);
// }
// console.log(arrResult);

// // 2d
// const range = Array(5);
// console.log(range);
// range.fill();
// const result = range.map((item, i) => i);
// console.log(result);

// // 3d
// const test = Array(5).keys();
// console.log(test);

// const test1 = [...Array(5).keys()];
// console.log(test1);

// tech live coding

// -------fizBaz-------

// 1st variant
// const fizBaz = numb => {
//   if (numb % 2 === 0 && numb % 3 === 0) {
//     return 'fizbaz';
//   }
//   if (numb % 2 === 0) {
//     return 'fiz';
//   }
//   if (numb % 3 === 0) {
//     return 'baz';
//   }
//   return 'Data do not has fiz or baz';
// };

// console.log(fizBaz(21));

// 2nd variant
// const fizBaz = numb => {
//   let result = '';

//   if (numb % 2 === 0) {
//     result += 'fiz';
//   }
//   if (numb % 3 === 0) {
//     result += 'baz';
//   }

//   return result;
// };

// console.log(fizBaz(6));

// ----anagram----

// 1st variant
// const anagram = (str1, str2) => {
//   if (str1.lenght !==str2.lenght){
//   return 'This is not anagram'}

//   const firstStr = str1
//     .split('')
//     .sort((a, b) => a.localeCompare(b))
//     .join('');
//   console.log(firstStr);

//   const secondStr = str2
//     .split('')
//     .sort((a, b) => a.localeCompare(b))
//     .join('');
//   console.log(firstStr);
//   console.log(secondStr);

//   return firstStr === secondStr ? 'This is anagram' : 'This is not anagram';
// };

// console.log(anagram('anna', 'nana'));

// 2nd variant o(n)
// const anagram = (str1, str2) => {
//   if (str1.lenght !== str2.lenght) {
//     return false;
//   }

//   const firstStrObj = str1.split('').reduce((acc, letter) => {
//     if (!acc[letter]) {
//       acc[letter] = 1;
//       return acc;
//     } else {
//       acc[letter] += 1;
//       return acc;
//     }
//   }, {});

//   for (const letter of str2) {
//     firstStrObj[letter] -= 1;
//   }

//   const valuesOfFirstStrObj = Object.values(firstStrObj).some(
//     value => value !== 0
//   );

//   return valuesOfFirstStrObj ? false : true;
// };

// console.log(anagram('anna', 'nana'));

// 3d variant
// const anagram = (str1, str2) => {
//   if (str1.lenght !== str2.lenght) {
//     return 'This is not anagram';
//   }

//   const str1arr = str1.split('');
//   const str2arr = str2.split('');

//   let counter = 0;
//   let result = true;

//   for (const letter of str1arr) {
//     const index = str2arr.indexOf(letter);
//     counter += 1;

//     if (index < 0 || str1arr.lenght < counter) {
//       counter = 0;
//       result = false;
//       break;
//     }

//     str2arr.splice(index, 1);
//   }

//   if (counter === 0 || str1arr.length !== counter) {
//     result = false;
//   }

//   return result;
// };

// console.log(anagram('anna', 'nana'));

// -----function with two arguments (array any async callback)-----

// const callback = async sring => {
//   if (!sring) {
//     const result = Promise.reject('Empty field');
//     return result;
//   }

//   const result = await Promise.resolve(sring.toUpperCase());
//   return result;
// };

// // 1st variant
// const arrayAsyncIterrator = async (arr, callback) => {
//   for (const string of arr) {
//     const result = await callback(string);
//     console.log(result);
//   }
// };

// // 2d variant
// // const arrayAsyncIterrator = (arr, callback) => {
// //   arr.forEach(async string => {
// //     const result = await callback(string);
// //     console.log(result);
// //   });
// // };

// arrayAsyncIterrator(['bill', 'kate', 'dAvid'], callback).catch(err =>
//   console.log(err)
// );

// -----------------Timer------------------

// const hoursRef = document.querySelector('.hours');
// const minutesRef = document.querySelector('.minutes');
// const secondsRef = document.querySelector('.seconds');

// const startRef = document.querySelector('.start');
// const stopRef = document.querySelector('.stop');
// const resetRef = document.querySelector('.reset');

// startRef.addEventListener('click', onStartClick);
// stopRef.addEventListener('click', onStopClick);
// resetRef.addEventListener('click', onResetClick);

// let counter = 0;
// let timer;

// function onStartClick() {
//   startRef.disabled = true;
//   stopRef.disabled = false;
//   resetRef.disabled = false;

//   timer = setInterval(() => {
//     counter += 1000;
//     const time = convertMs(counter);

//     hoursRef.textContent = time.hours;
//     minutesRef.textContent = time.minutes;
//     secondsRef.textContent = time.seconds;
//   }, 1000);
// }

// function onStopClick() {
//   clearInterval(timer);

//   startRef.disabled = false;
//   stopRef.disabled = true;
// }

// function onResetClick() {
//   clearInterval(timer);
//   counter = 0;

//   startRef.disabled = false;
//   stopRef.disabled = true;
//   resetRef.disabled = true;

//   hoursRef.textContent = '00';
//   minutesRef.textContent = '00';
//   secondsRef.textContent = '00';
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
