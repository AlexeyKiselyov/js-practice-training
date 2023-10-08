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

// -----------Mumbling-------------

// 1nd option
// function accum(str) {
//   return str
//     .split('')
//     .map(
//       (letter, ind) => letter.toUpperCase() + letter.toLowerCase().repeat(ind)
//     )
//     .join('-');
// }

// console.log(accum('abcd')); //"A-Bb-Ccc-Dddd"

// // 2nd option
// function accum(str) {
//   const result = str.split('').map((letter, ind) => {
//     let counter = '';
//     for (let i = 0; i < ind; i++) {
//       counter += letter.toLowerCase();
//     }
//     return letter.toUpperCase() + counter;
//   });

//   return result.join('-');
// }

// console.log(accum('abcd')); //"A-Bb-Ccc-Dddd"

// -----------Jaden Casing Strings--------------

// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

// --------------Highest and Lowest--------------

// 1st option
// function highAndLow(numbers) {
//   const sortArr = numbers.split(' ');

//   const maxNumb = Math.max(...sortArr);
//   const minNumb = Math.min(...sortArr);

//   return maxNumb + ' ' + minNumb;
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

// 2nd option
// function highAndLow(numbers) {
//   const sortArr = numbers.split(' ').sort((a, b) => a - b);

//   const maxNumb = sortArr[sortArr.length - 1];
//   const minNumb = sortArr[0];

//   return maxNumb + ' ' + minNumb;
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

// ------------Regex validate PIN code--------------

// 1st option
// function validatePIN(pin) {
//   const regex = /^\d+$/;

//   return regex.test(pin) && (pin.length === 4 || pin.length === 6);
// }

// console.log(validatePIN('123456'));

// 2nd option
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

// console.log(validatePIN('123456'));

// 3d options
// function validatePIN(pin) {
//   const pinHaveOnlyDigits = pin.split('').some(i => {
//     return Number.isNaN(Number(i));
//   });

//   return !pinHaveOnlyDigits && (pin.length === 4 || pin.length === 6);
// }

// console.log(validatePIN('1234'));

// ---------------Stop gninnipS My sdroW!--------------

// 1st option
// function spinWords(string) {
//   return string
//     .split(' ')
//     .map(word => {
//       if (word.length > 4) {
//         return word.split('').reverse().join('');
//       }
//       return word;
//     })
//     .join(' ');
// }

// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('Hello'));
// console.log(spinWords('Hi'));

// 2nd option
// function spinWords(string) {
//   if (!string.includes(' ') && string.length > 4) {
//     return string.split('').reverse().join('');
//   }

//   if (!string.includes(' ') && string.length < 5) {
//     return string;
//   }

//   return string
//     .split(' ')
//     .map(word => {
//       if (word.length > 4) {
//         return word.split('').reverse().join('');
//       }
//       return word;
//     })
//     .join(' ');
// }

// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('Hello'));

// ------------Does my number look big in this?-----------

// function narcissistic(value) {
//   const result = String(value)
//     .split('')
//     .reduce((acc, numb, ind, arr) => {
//       acc += Math.pow(Number(numb), arr.length);
//       return acc;
//     }, 0);

//   return result === Number(value);
// }

// console.log(narcissistic(153));

// -----------Valid Braces---------------

// 1st option
// function validBraces(braces) {
//   const stack = [];
//   const openingBraces = ['(', '[', '{'];
//   const closingBraces = [')', ']', '}'];
//   const bracePairs = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };

//   for (const brace of braces) {
//     if (openingBraces.includes(brace)) {
//       stack.push(brace);
//     } else if (closingBraces.includes(brace)) {
//       if (stack.length === 0 || bracePairs[stack.pop()] !== brace) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// console.log(validBraces('[{]}'));
// console.log(validBraces('[]{}'));
// console.log(validBraces('[({})][()()]'));

// 2nd option

// function validBraces(braces) {
//   while (/\(\)|\[\]|\{\}/g.test(braces)) {
//     braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
//   }
//   return !braces.length;
// }

// -----------Maximum subarray sum----------

// 1st option
// var maxSequence = function (arr) {
//   let min = 0;
//   let result = 0;
//   let sum = 0;

//   arr.forEach(numb => {
//     sum += numb;
//     min = Math.min(sum, min);
//     result = Math.max(result, sum - min);
//   });

//   return result;
// };

// 2nd option (with indexes)
// var maxSequence = function (arr) {
//   let maxSum = 0;
//   let currentSum = 0;

//   let currentStartInd;
//   let startInd;
//   let endInd;

//   arr.forEach((numb, ind) => {
//     currentSum += numb;

//     if (currentSum < 0) {
//       currentSum = 0;
//       currentStartInd = ind + 1;
//     }

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       startInd = currentStartInd;
//       endInd = ind;
//     }
//   });

//   const interval = startInd
//     ? `(from ${startInd} index to ${endInd} index)`
//     : '';

//   return `Result: ${maxSum} ${interval} `;
// };

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSequence([2, 4, 6, 8]));
// console.log(maxSequence([-2, -4, -6, -8]));
// console.log(maxSequence([]));
// console.log(maxSequence([-19, 4, 49, 47, 17, -5, -27, 38]));

// console.log(maxSequence([-2, -4, 7]));

// ------------------Detect Pangram----------------

// 1st option
// function isPangram(string) {
//   const regex = /([a-z])(?!.*\1)/gi;

//   return (string.match(regex) || []).length === 26;
// }

// 2nd option
// function isPangram(string) {
//   const abc = 'abcdefghijklmnopqrstuvwxyz';
//   const stringNormalize = string.toLowerCase();

//   return abc.split('').every(letter => stringNormalize.includes(letter));
// }

// 3rd option
// function isPangram(string) {
//   const abcObj = {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//     f: 0,
//     g: 0,
//     h: 0,
//     i: 0,
//     j: 0,
//     k: 0,
//     l: 0,
//     m: 0,
//     n: 0,
//     o: 0,
//     p: 0,
//     q: 0,
//     r: 0,
//     s: 0,
//     t: 0,
//     u: 0,
//     v: 0,
//     w: 0,
//     x: 0,
//     w: 0,
//     z: 0,
//   };
//   const stringNormalize = string.toLowerCase().split('');

//   stringNormalize.forEach(letter => {
//     if (abcObj[letter] === 0) {
//       abcObj[letter] += 1;
//     }
//   });

//   const abcObjValues = Object.values(abcObj);

//   return abcObjValues.every(letter => letter > 0);
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('Cwm fjord bank glyphs vext quiz'));
// console.log(isPangram('Cwm fjord bank glyphs vext qui'));

// ---------------Help Suzuki purchase his Tofu!---------------------

// 1st option
// function buyTofu(cost, box) {
//   const boxArr = box.split(' ');

//   const moneyObj = boxArr.reduce(
//     (acc, item) => {
//       if (item === 'mon') {
//         acc.mon += 1;
//         acc.total += 1;
//       }
//       if (item === 'monme') {
//         acc.monme += 1;
//         acc.total += 60;
//       }
//       return acc;
//     },
//     { mon: 0, monme: 0, total: 0 }
//   );

//   if (moneyObj.total < cost) {
//     return 'leaving the market';
//   }

//   let counter = cost;
//   let coinsQuantity = 0;
//   const monmeValue = 60;
//   const monValue = 1;
//   const moneyObjCopy = { ...moneyObj };

//   while (counter - 60 >= 0) {
//     if (moneyObjCopy.monme <= 0) {
//       break;
//     }
//     counter -= monmeValue;
//     coinsQuantity += 1;
//     moneyObjCopy.monme -= 1;
//   }

//   while (counter - 1 >= 0) {
//     if (moneyObjCopy.mon <= 0) {
//       break;
//     }
//     counter -= monValue;
//     coinsQuantity += 1;
//     moneyObjCopy.mon -= 1;
//   }

//   if (counter) {
//     return 'leaving the market';
//   }

//   return [moneyObj.mon, moneyObj.monme, moneyObj.total, coinsQuantity];
// }

// const box = 'mon monme';
// // const box =
// //   'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';

// const cost = 5;
// // const cost = 124;

// // [count of mon coins in box, count of monme coins in box,sum of all coins value in box, minimum number of coins needed for Tofu]

// console.log(buyTofu(cost, box));

// 2nd option
// const buyTofu = (cost, box) => {
//   let monme_cnt = (box.match(/\bmonme\b/g) || []).length,
//     mon_cnt = (box.match(/\bmon\b/g) || []).length,
//     monme_req = Math.min(monme_cnt, (cost / 60) | 0),
//     mon_req = cost - monme_req * 60;

//   return mon_req > mon_cnt
//     ? 'leaving the market'
//     : [mon_cnt, monme_cnt, mon_cnt + monme_cnt * 60, mon_req + monme_req];
// };

// ------------Capitalization and Mutability--------------

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalizeWord('word'));

// --------------Welcome!------------------

// const greetings = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso',
// };

// function greet(language) {
//   return greetings[language] || 'Welcome';
// }

// console.log(greet('polish'));

// -----------Vampire Numbers-------------

// 1st option
// function vampireTest(a, b) {
//   const innerDataForCompare = (String(a) + String(b)).split('').sort().join('');

//   const multDataForCompare = String(a * b)
//     .split('')
//     .sort()
//     .join('');

//   return innerDataForCompare === multDataForCompare;
// }

// 2nd option
// function vampireTest(a, b) {
//   const innerDataForCompare = (String(a) + String(b)).split('');

//   const multDataForCompare = String(a * b).split('');

//   multDataForCompare.forEach(item => {
//     const checkInd = innerDataForCompare.indexOf(item);
//     if (checkInd < 0) {
//       return false;
//     } else {
//       innerDataForCompare.splice(checkInd, 1);
//     }
//   });

//   return innerDataForCompare.length === 0;
// }

// console.log(vampireTest(6, 21));
// console.log(vampireTest(30, -51));

// ------------Volume of a Cuboid-------------

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// console.log(Kata.getVolumeOfCuboid(1, 2, 2));

// ----------Leap Years---------------

// 1st option
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// 2nd option
// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     return true;
//   }
//   if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
//     return false;
//   }
//   return year % 4 === 0;
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2100));

// --------------Simple multiplication------------------

// function simpleMultiplication(number) {
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(1));

// -------------Who ate the cookie?-------------

// function cookie(x) {
//   if (typeof x === 'string') {
//     return 'Who ate the last cookie? It was Zach!';
//   }
//   if (typeof x === 'number') {
//     return 'Who ate the last cookie? It was Monica!';
//   }
//   return 'Who ate the last cookie? It was the dog!';
// }

// console.log(cookie('hi'));

// ------------Who is going to pay for the wall?-------

// function whoIsPaying(name) {
//   return name.length > 2 ? [name, name.slice(0, 2)] : [name];
// }

// console.log(whoIsPaying('Mexico'));
// console.log(whoIsPaying('Me'));
// console.log(whoIsPaying(''));

// ----------Grasshopper - Function syntax debugging---------

// function main(verb, noun) {
//   return verb + noun;
// }

// console.log(main('take ', 'item'));

// -----------No zeros for heros--------------

// 1st option
// function noBoringZeros(n) {
//   while (n % 10 === 0 && n !== 0) {
//     n /= 10;
//   }
//   return n;
// }

// 2nd option
// function noBoringZeros(n) {
//   if (n % 10 === 0 && n !== 0) {
//     return noBoringZeros(n / 10);
//   }
//   return n;
// }

// 3rd option
// function noBoringZeros(n) {
//   if (n === 0) {
//     return 0;
//   }
//   const numbToString = String(n).split('');

//   for (let i = numbToString.length - 1; i >= 0; i--) {
//     if (numbToString[i] === '0') {
//       numbToString.pop(i);
//     } else {
//       break;
//     }
//   }
//   return +numbToString.join('');
// }

// console.log(noBoringZeros(1450));
// console.log(noBoringZeros(0));

// ----------------Draw stairs------------------

// 1st option
// function drawStairs(n) {
//   const result = [...Array(n)]
//     .map((item, ind) => ' '.repeat(ind) + 'I')
//     .join('\n');
//   return result;
// }

// 2nd option
// function drawStairs(n) {
//   let sumArr = [];

//   for (let i = 0; i < n; i++) {
//     sumArr.push(' '.repeat(i) + 'I\n');
//   }

//   return sumArr.join('');
// }

// 3rd option
// function drawStairs(n) {
//   if (n === 0) {
//     return '';
//   }

//   let sumArr = [];
//   let spaceCounter = '';

//   for (let i = 0; i <= n; i++) {
//     if (i === n - 1) {
//       if (spaceCounter.length > 0) {
//         sumArr.push(spaceCounter + 'I');
//       } else {
//         sumArr.push(spaceCounter + 'I');
//       }
//       break;
//     } else {
//       sumArr.push(spaceCounter + `I\n`);
//       spaceCounter += ' ';
//     }
//   }

//   return sumArr.join('');
// }

// console.log(drawStairs(0));
// console.log(drawStairs(1));
// console.log(drawStairs(2));
// console.log(drawStairs(3));
// console.log(drawStairs(7));

// ------------Sum of Multiples------------

// 1st option
// function sumMul(n, m) {
//   let result = 0;

//   for (let i = n; i < m; i += n) {
//     result += i;
//   }

//   return result === 0 ? 'INVALID' : result;
// }

// 2nd option
// function sumMul(n, m) {
//   if (n >= m) {
//     return 'INVALID';
//   }

//   const result = Array.from(Array(m), (_, index) => index)
//     .slice(n)
//     .reduce((acc, item) => {
//       if (item % n === 0) {
//         acc += item;
//       }
//       return acc;
//     }, 0);

//   return result;
// }

// 3rd option
// function sumMul(n, m) {
//   if (n >= m) {
//     return 'INVALID';
//   }
//   const result = Array(m)
//     .fill(null)
//     .reduce((acc, item, ind) => {
//       if (ind + 1 < n) {
//         return acc;
//       }
//       if ((ind + 1) % n === 0) {
//         acc += ind + 1;
//       }
//       return acc;
//     }, 0);

//   return result;
// }

// 4th option
// function sumMul(n, m) {
//   return n >= m
//     ? 'INVALID'
//     : Array.from(Array(m), (_, index) => index)
//         .slice(n)
//         .reduce((acc, item) => {
//           if (item % n === 0) {
//             acc += item;
//           }
//           return acc;
//         }, 0);
// }

// console.log(sumMul(0, 0)); //"INVALID"
// console.log(sumMul(2, 9)); //20
// console.log(sumMul(4, -7)); //"INVALID"

// --------------Remove duplicates from list---------------

// 1st option
// function distinct(a) {
//   return a.reduce((acc, item) => {
//     if (!acc.includes(item) && item > 0) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }

// 2nd option
// function distinct(a) {
//   return [...new Set(a)];
// }

// console.log(distinct([1, 1, 2])); //[1, 2]
// console.log(distinct([1, 1, 2, 2, 2, 2, 3, 5, 6, 8])); //[1, 2]

// -------------Area or Perimeter---------------

// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : (l + w) * 2;
// };

// console.log(areaOrPerimeter(3, 3)); //9
// console.log(areaOrPerimeter(6, 10)); //32

// -------------oliday VIII - Duty Free-----------

// function dutyFree(normPrice, discount, hol) {
//   const benefit = (normPrice * discount) / 100;
//   const bottlesQuantity = Math.floor(hol / benefit);

//   return bottlesQuantity;
// }

// console.log(dutyFree(12, 50, 1000)); // 166
// console.log(dutyFree(17, 10, 500)); // 294

// --------------Reverse List Order------------

// function reverseList(list) {
//   return list.reverse();
// }

// console.log(reverseList([1, 2, 3, 4]));
// console.log(reverseList([3, 1, 5, 4]));

// -------------Will there be enough space?---------

// 1st option
// function enough(cap, on, wait) {
//   const QuantityOfPeopleWhoDontFit = wait - (cap - on);

//   return QuantityOfPeopleWhoDontFit > 0 ? QuantityOfPeopleWhoDontFit : 0;
// }

// // 2nd option
// function enough(cap, on, wait) {
//   return Math.max(on + wait - cap, 0);
// }

// console.log(enough(10, 5, 5)); //0
// console.log(enough(100, 60, 50)); //10
// console.log(enough(20, 5, 5)); //0

// -------------All Star Code Challenge #18------------

// function strCount(str, letter) {
//   return str.split('').filter(char => char === letter).length;
// }

// console.log(strCount('Hello', 'o')); // 1
// console.log(strCount('', 'z')); // 0

// ------------Triple Trouble--------------

// 1st option
// function tripleTrouble(one, two, three) {
//   let result = '';

//   for (let i = 0; i < one.length; i++) {
//     result += one[i] + two[i] + three[i];
//   }

//   return result;
// }

// 2nd option
// function tripleTrouble(one, two, three) {
//   return one.split('').reduce((acc, letter, ind) => {
//     acc += letter + two[ind] + three[ind];
//     return acc;
//   }, '');
// }

// console.log(tripleTrouble('aaa', 'bbb', 'ccc')); //"abcabcabc"

// -----------------Find the position!-------------

// const abc = 'abcdefghijklmnopqrstuvwxyz';

// function position(letter) {
//   const letterPosition = abc.indexOf(letter) + 1;
//   return `Position of alphabet: ${letterPosition}`;
// }

// console.log(position('a')); //"Position of alphabet: 1"

// ---------------MakeUpperCase----------------

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// console.log(makeUpperCase('hello')); //"HELLO"

// ------------Lario and Muigi Pipe Problem---------

// 1st option
// function pipeFix(numbers) {
//   const firstNumb = numbers[0];
//   const lastNumb = numbers[numbers.length - 1];
//   let result = [];

//   for (let i = firstNumb; i <= lastNumb; i++) {
//     result.push(i);
//   }

//   return result;
// }

// 2nd option
// function pipeFix(numbers) {
//   if (numbers.length === 1) {
//     return numbers;
//   }

//   const firstNumb = numbers.shift();
//   const lastNumb = numbers.pop();
//   let result = [];

//   for (let i = firstNumb; i <= lastNumb; i++) {
//     result.push(i);
//   }

//   return result;
// }

// 3d option
// function pipeFix(numbers) {
//   return numbers.reduce((acc, numb, ind, arr) => {
//     let nextNumb = arr[ind + 1];
//     for (let i = numb; i < nextNumb; i++) {
//       acc.push(i);
//     }
//     if (ind === arr.length - 1) {
//       acc.push(numb);
//     }
//     return acc;
//   }, []);
// }

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]
// console.log(pipeFix([2])); //[2]

// --Training JS #18: Methods of String object--concat() split() and its good friend join()--

// function splitAndMerge(string, separator) {
//   return string
//     .split(' ')
//     .map(sentence => {
//       return sentence.split('').join(separator);
//     })
//     .join(' ');
// }

// console.log(splitAndMerge('My name is John', ' ')); //"M y n a m e i s J o h n"
// console.log(splitAndMerge('My name is John', '-')); //"M-y n-a-m-e i-s J-o-h-n"

// --------------------Drink about------------------

// 1st option
// const agesObj = {
//   children: 'drink toddy',
//   teens: 'drink coke',
//   young: 'drink beer',
//   adults: 'drink whisky',
// };

// function peopleWithAgeDrink(old) {
//   if (old < 14) {
//     return agesObj.children;
//   } else if (old < 18) {
//     return agesObj.teens;
//   } else if (old < 21) {
//     return agesObj.young;
//   } else {
//     return agesObj.adults;
//   }
// }

// 2nd option
// function peopleWithAgeDrink(age) {
//   switch (true) {
//     case age >= 21:
//       return 'drink whisky';
//     case age >= 18:
//       return 'drink beer';
//     case age >= 14:
//       return 'drink coke';
//     default:
//       return 'drink toddy';
//   }
// }

// console.log(peopleWithAgeDrink(22));

// --------get character from ASCII Value----------

// function getChar(c) {
//   return String.fromCharCode(c);
// }

// console.log(getChar(55)); //7

// ----------Quarter of the year-------------

// 1st option
// const quarterOf = month => {
//   return Math.ceil(month / 3);
// };

// 2nd option
// const quarterOf = month => {
//   if (month < 4) {
//     return 1;
//   } else if (month < 7) {
//     return 2;
//   } else if (month < 10) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// console.log(quarterOf(3)); //1
// console.log(quarterOf(8)); //3

// --------Calculate average------------

// function findAverage(array) {
//   if (array.length === 0) return 0;

//   const sum = array.reduce((acc, numb) => (acc += numb), 0);

//   return sum / array.length;
// }

// console.log(findAverage([1, 2, 3, 4])); //2.5

// ---------------Basic Mathematical Operations-----------

// 1st option
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//   }
// }

// 2nd option
// function basicOp(operation, value1, value2) {
//   return eval(value1 + operation + value2);
// }

// 3dd option
// function basicOp(operation, value1, value2) {
//   const operationsObj = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2,
//   };
//   return operationsObj[operation];
// }

// console.log(basicOp('+', 4, 7)); //11
// console.log(basicOp('-', 15, 18)); //-3

// ------------Find Multiples of a Number--------------

// function findMultiples(integer, limit) {
//   let result = [];

//   for (let i = integer; i <= limit; i++){
//     if (i % integer === 0) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(findMultiples(5, 25)); //[5, 10, 15, 20, 25]

// -------------Add Length-------------

// function addLength(str) {
//   return str.split(' ').map(word => `${word} ${word.length}`);
// }

// console.log(addLength('apple ban')); //["apple 5", "ban 3"]

// -----------Last man standing----------

// 1st option
// function lastManStanding(n) {
//   const arr = new Array(n).fill(1).map((item, ind) => item + ind);

//   while (arr.length > 1) {
//     const newArr = arr.filter((numb, ind) => ind % 2 !== 0).reverse();
//     arr.splice(0, arr.length, ...newArr);
//   }

//   return arr[0];
// }

// console.log(lastManStanding(9)); //6

// ----------Welcome to the City-----------

// function sayHello(name, city, state) {
//   const fullName = name.join(' ');
//   return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
// }

// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')); //'Hello, John Smith! Welcome to Phoenix, Arizona!'

// --------------Remove First and Last Character Part Two----------------

// function array(string) {
//   const result = string.split(',').slice(1, -1).join(' ');

//   return result ? result : null;
// }

// console.log(array('1,2,3')); //2
// console.log(array('1,2')); //null

// -----------Printing Array elements with Comma delimiters---------

// function printArray(array) {
//   return array.join(',');
// }

// console.log(printArray(['h', 'o', 'l', 'a'])); //"h,o,l,a"

// ----------Double Char-----------

// function doubleChar(str) {
//   return str.split('').reduce((acc, item) => {
//     acc += item + item;
//     return acc;
//   }, '');
// }

// console.log(doubleChar('abcd')); // "aabbccdd"

// ------------Name on billboard-----------

// function billboard(name, price = 30) {
//   return name.split('').reduce((acc, item) => {
//     acc += price;
//     return acc;
//   }, 0);
// }

// console.log(billboard('Jeong-Ho Aristotelis', 30)); //600

// ---------------Jenny's secret message--------

// function greet(name) {
//   if (name === 'Johnny') return 'Hello, my love!';
//   return 'Hello, ' + name + '!';
// }

// console.log(greet('Jim')); //"Hello, Jim!"
// console.log(greet('Johnny')); // "Hello, my love!"

// ------Eliminate the intruders! Bit manipulation-----

// 1st option
// function eliminateUnsetBits(number) {
//   return parseInt(number.replace(/0/g, '') || 0, 2);
// }

// 2nd optionS
// function eliminateUnsetBits(number) {
//   const withoutZeros = number.split('').reduce((acc, numb) => {
//     if (numb === '1') {
//       acc += 1;
//     }
//     return acc;
//   }, '');
//   return withoutZeros ? parseInt(withoutZeros, 2) : 0;
// }

// console.log(eliminateUnsetBits('111')); //7
// console.log(eliminateUnsetBits('1000000')); //1
// console.log(eliminateUnsetBits('0111110111100000011111101010')); //131071
// console.log(eliminateUnsetBits('')); //0

// ----Short Long Short-------

// function solution(a, b) {
//   return a.length > b.length ? b + a + b : a + b + a;
// }

// console.log(solution('45', '1')); //'1451';

// -----Removing Elements---------

// function removeEveryOther(arr) {
//   return arr.filter((_, ind) => ind % 2 === 0);
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); //['Hello', 'Hello Again'];

// -----------Stringy Strings-------------

// 1st option
// function stringy(size) {
//   return new Array(size)
//     .fill(1)
//     .map((_, ind) => {
//       return ind % 2 === 0 ? 1 : 0;
//     })
//     .join('');
// }

// 2nd option
// function stringy(size) {
//   let result = '';
//   while (size > 0) {
//     if (result % 2 === 0) {
//       result += 1;
//     } else {
//       result += 0;
//     }
//     size -= 1;
//   }
//   return result;
// }

// 3d option
// function stringy(size) {
//   return ''.padStart(size, 10);
// }

// console.log(stringy(4)); //'1010';

// --------Job Matching #1------
// let candidate = {
//   minSalary: 190000,
// };
// let job = {
//   maxSalary: 171000,
// };

// function match(candidate, job) {
//   if (!candidate.minSalary || !job.maxSalary) throw new Error();
//   const candSalary = candidate.minSalary * 0.9;
//   return job.maxSalary >= candSalary;
// }

// console.log(match(candidate, job));

// --------Bin to Decimal---------

// function binToDec(bin) {
//   return parseInt(bin, 2);
// }

// console.log(binToDec('1001001')); //73;

// ---------How good are you really?-------------

// function betterThanAverage(classPoints, yourPoints) {
//   const resultsArr = [...classPoints, yourPoints];
//   const averageAmount =
//     resultsArr.reduce((acc, numb) => (acc += numb), 0) / resultsArr.length;

//   return yourPoints >= averageAmount ? true : false;
// }

// console.log(betterThanAverage([2, 3], 5)); //true;

// ---Converting 12-hour time to 24-hour time---

// first option
// function to24hourtime(hour, minute, period) {
//   const resultMinute = String(minute).padStart(2, '0');
//   let resultHour = '';

//   if (period === 'am') {
//     if (hour === 12) {
//       resultHour = '00';
//     } else {
//       resultHour = String(hour).padStart(2, '0');
//     }
//   }

//   if (period === 'pm') {
//     if (hour === 12) {
//       resultHour = '12';
//     } else {
//       resultHour = String(hour + 12);
//     }
//   }

//   return resultHour + resultMinute;
// }

// second option
// function to24hourtime(hour, minute, period) {
//   if (period === 'am' && hour === 12) {
//     hour = 0;
//   } else if (period === 'pm' && hour !== 12) {
//     hour += 12;
//   }
//   return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
// }

// console.log(to24hourtime(1, 0, 'am')); //"0100"
// console.log(to24hourtime(1, 0, 'pm')); //"1300"
// console.log(to24hourtime(12, 0, 'pm')); //"1200"

// ------NATO Phonetic Alphabet----------

// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc

// function nato(word) {
//   return word
//     .split('')
//     .map((char, idx) => {
//       if (idx === word.length - 1) {
//         return LETTERS[char.toUpperCase()];
//       }
//       return LETTERS[char.toUpperCase()] + ' ';
//     })
//     .join('');
// }

// ----------Even or Odd-------------

// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

// console.log(evenOrOdd(2)); //"Even";
// console.log(evenOrOdd(7)); //"Odd";

// -----------Find the smallest integer in the array--------

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     const sortedArr = args.sort((a, b) => a - b);
//     return sortedArr[0];
//   }
// }
// const result = new SmallestIntegerFinder();

// console.log(result.findSmallestInt([78, 56, 232, 12, 8]));

// ----------Simple Fun #10: Range Bit Counting--------

// 1st option
// function rangeBitCount(a, b) {
//   let result = 0;

//   for (let i = a; i <= b; i++) {
//     result += i.toString(2).split(1).length - 1;
//   }

//   return result;
// }

// 2nd option
// function rangeBitCount(a, b) {
//   let result = 0;

//   for (let i = a; i <= b; i++) {
//     const toBin = i.toString(2);
//     toBin.split('').forEach(numb => {
//       if (numb === '1') {
//         result += 1;
//       }
//     });
//   }

//   return result;
// }

// console.log(rangeBitCount(2, 7)); // 11

// -----Simple Fun #30: Strings Construction-----

// 1st option
// function stringsConstruction(A, B) {
//   for (let i = 0; ; i++) {
//     for (let c of A) {
//       if (B.includes(c)) {
//         B = B.replace(c, '-');
//       } else {
//         return i;
//       }
//     }
//   }
// }

// 2nd option
// function stringsConstruction(A, B) {
//   const charCountA = {};
//   const charCountB = {};

//   // Count the characters in strings A and B
//   for (const char of A) {
//     charCountA[char] = (charCountA[char] || 0) + 1;
//   }
//   for (const char of B) {
//     charCountB[char] = (charCountB[char] || 0) + 1;
//   }

//   // Initialize a variable to keep track of the minimum count
//   let minCount = Infinity;

//   // Calculate the minimum count of each character in A
//   for (const char in charCountA) {
//     const countInA = charCountA[char];
//     const countInB = charCountB[char] || 0;
//     const possibleCount = Math.floor(countInB / countInA);
//     minCount = Math.min(minCount, possibleCount);
//   }

//   return minCount;
// };

// 3d option
// function stringsConstruction(A, B) {
//   let counter = 0;
//   let condishion = true;
//   const arrayA = A.split('');

//   const objectOfChars = B.split('').reduce((acc, char) => {
//     acc[char] ? (acc[char] += 1) : (acc[char] = 1);
//     return acc;
//   }, {});

//   while (condishion) {
//     for (let i = 0; i < arrayA.length; i++) {
//       if (objectOfChars[arrayA[i]] <= 0) {
//         condishion = false;
//         break;
//       }
//       objectOfChars[arrayA[i]] -= 1;
//     }
//     if (condishion) counter += 1;
//   }

//   return counter;
// }

// console.log(stringsConstruction('abc', 'abccba')); //2

// ---------Return substring instance count--------------

// 1st option
// function solution(fullText, searchText) {
//   const regex = new RegExp(searchText, 'gi');
//   const mutches = fullText.match(regex);
//   return mutches ? mutches.length : 0;
// }

// 2nd option
// function solution(fullText, searchText) {
//   return fullText.split(searchText).length - 1;
// }

// console.log(solution('abababcabdababab', 'ab')); // 7

// -----------Tail Swap-------------

// function tailSwap(arr) {
//   const str1FitstPart = arr[0].split(':')[0];
//   const str1SecondPart = arr[0].split(':')[1];

//   const str2FitstPart = arr[1].split(':')[0];
//   const str2SecondPart = arr[1].split(':')[1];

//   return [
//     `${str1FitstPart}:${str2SecondPart}`,
//     `${str2FitstPart}:${str1SecondPart}`,
//   ];
// }

// console.log(tailSwap(['abc:123', 'cde:456'])); // ['abc:456', 'cde:123']

// -----------Friend or Foe?----------------

// function friend(friends) {
//   return friends.filter(name => name.length === 4);
// }

// console.log(friend(['Ryan', 'Kieran', 'Mark'])); // ['Ryan', 'Mark']

// ----------Cats and shelves---------

// let counter = 0;

// function solution(start, finish) {
//   if (start === finish) {
//     return counter;
//   }

//   if (finish - 3 > start) {
//     counter += 1;
//     return solution(start, finish - 3);
//   }

//   counter += 1;
//   return solution(start, finish - 1);
// }

// console.log(solution(1, 5)); //  2
// console.log(solution(3, 3)); //  0
// console.log(solution(2, 4)); //  2

// ------------FIXME: Replace all dots--------

// var replaceDots = function (str) {
//   return str.replace(/\./g, '-');
// };

// console.log(replaceDots('one.two.three')); //'one-two-three'

// ------------Return Two Highest Values in List------------

// 1st option
// function twoHighest(arr) {
//   return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
// }

// 2nd option
// function twoHighest(arr) {
//   const result = [];
//   const sortArr = arr
//     .sort((a, b) => b - a)
//     .forEach((numb, ind, initArr) => {
//       if (numb !== initArr[ind - 1]) {
//         result.push(numb);
//       }
//     });

//   return result.length > 0 ? result.slice(0, 2) : result[0] || [];
// }

// console.log(twoHighest([15, 20, 20, 17])); // [20, 17]
// console.log(twoHighest([15])); // [15]
// console.log(twoHighest([])); // []

// ------Running out of space--------

// 1st option
// function spacey(array) {
//   let strCounter = '';

//   return array.map(item => {
//     strCounter += item;
//     return strCounter;
//   });
// }

// 2nd option
// function spacey(array) {
//   const result = [];
//   let strCounter = '';

//   array.forEach(item => {
//     strCounter += item;
//     result.push(strCounter);
//   });

//   return result;
// }

// console.log(spacey(['kevin', 'has', 'no', 'space'])); // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']

// ----Cryptanalysis Word Patterns----

// 1st option
// const wordPattern = word => {
//   word = word.toLowerCase();
//   const set = [...new Set(word)];
//   return word
//     .split('')
//     .map(e => set.indexOf(e))
//     .join('.');
// };

// 2nd option
// function wordPattern(word) {
//   const wordToLowCaseArr = word.toLowerCase().split('');
//   let counter = 0;
//   const charObj = {};

//   const result = wordToLowCaseArr.map((letter, ind) => {
//     if (!charObj[letter] && ind === 0) {
//       charObj[letter] = counter;
//       return counter;
//     }
//     if (!charObj[letter] && charObj[letter] !== 0) {
//       counter += 1;
//       charObj[letter] = counter;
//       return counter;
//     }
//     return charObj[letter];
//   });
//   console.log(charObj);

//   return result.join('.');
// }

// console.log(wordPattern('helLo')); // "0.1.2.2.3"

// console.log(wordPattern('Hippopotomonstrosesquippedaliophobia')); // "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"

// ----------All Star Code Challenge #3--------------

// var removeVowels = function (str) {
//   return str.replace(/[aeiouAEIOU]/g, '');
// };

// console.log(removeVowels('drake')); //"drk"

// -------Trimming a string (not complited)------

// function trim(str, size) {
//   if (size >= str.length) {
//     return str;
//   } else if (str.length <= 3 && size === 1) {
//     return str[0] + '...';
//   } else {
//     const baseStr = str.slice(0, size - 3);
//     return baseStr + '...';
//   }
// }

// console.log(trim('Creating kata is fun', 14)); // "Creating ka..."
// console.log(trim('He', 1)); // "H..."
// console.log(trim('Code Wars is pretty rad', 50)); // "Code Wars is pretty rad"
// console.log(trim('"eAlD"', 1)); // "e..."

// -------------Price of Mangoes--------------

// 1nd option
// function mango(quantity, price) {
//   const promoValue = 3;
//   const freeMangos = Math.floor(quantity / promoValue);
//   return (quantity - freeMangos) * price;
// }

// 2nd option
// function mango(quantity, price) {
//   let counter = 0;
//   const promoValue = 3;
//   const paidQuantity = 2;
//   while (quantity - promoValue >= 0) {
//     quantity -= promoValue;
//     counter += 1;
//   }
//   const result =
//     paidQuantity * counter * price +
//     (quantity > 1 ? paidQuantity * price : quantity * price);
//   return result;
// }

// console.log(mango(3, 3)); // 6
// console.log(mango(9, 5)); // 30

// -------------Number climber-------------

// function climb(n) {
//   const result = [n];
//   while (n > 1) {
//     n = Math.floor(n / 2);
//     result.unshift(n);
//   }
//   return result;
// }

// console.log(climb(10)); // [1, 2, 5, 10]
// console.log(climb(13)); // [1, 3, 6, 13]

// ------------Is your period late?-------------

// const MS_PER_DAY = 1000 * 60 * 60 * 24;

// function periodIsLate(last, today, cycleLength) {
//   const daysDiff = Math.floor((today - last) / MS_PER_DAY);
//   return cycleLength - daysDiff >= 0 ? false : true;
// }

// console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); // false
// console.log(periodIsLate(new Date(2016, 7, 12), new Date(2016, 8, 9), 28)); // false

// ---------------Pillars-------------

// function pillars(numPill, dist, width) {
//   if (numPill < 2) return 0;

//   const numbOfPillSpacing = numPill - 1;
//   const allPillsWidth = numPill * width;
//   const distInCent = dist * 100;
//   const widthOfFirstAndLastPill = width * 2;

//   const fullDistance = distInCent * numbOfPillSpacing + allPillsWidth;
//   return fullDistance - widthOfFirstAndLastPill;
// }

// console.log(pillars(1, 10, 10)); // 0
// console.log(pillars(2, 20, 25)); // 2000

// ----------Sum a list but ignore any duplicates-----------

// 1st option
// function sumNoDuplicates(arr) {
//   let uniqueArr = [];
//   let result = 0;
//   arr.forEach(num => {
//     if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//       uniqueArr.push(num);
//       result += num;
//     }
//   });
//   return result;
// }

// 2nd option
// function sumNoDuplicates(numList) {
//   let result = 0;

//   const obj = numList.reduce((acc, item) => {
//     !acc[item] ? (acc[item] = 1) : (acc[item] += 1);
//     return acc;
//   }, {});

//   const objKeys = Object.keys(obj);
//   for (const key of objKeys) {
//     if (obj[key] === 1) {
//       result += Number(key);
//     }
//   }

//   return result;
// }

// console.log(sumNoDuplicates([3, 4, 3, 6])); //10

// ------------String ends with?--------------

// 1st option
// function solution(str, ending) {
//   const endOfStr = str.slice(-ending.length);
//   return endOfStr === ending;
// }

// 2nd option
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// 3rd oprion
// function solution(str, ending) {
//   const strReverse = str.split('').reverse().join('');
//   const endReverse = ending.split('').reverse().join('');
//   let result = true;

//   for (let i = 0; i < ending.length; i++) {
//     if (strReverse[i] !== endReverse[i]) {
//       result = false;
//       break;
//     }
//   }

//   return result;
// }

// console.log(solution('abc', 'bc')); //true
// console.log(solution('abcde', 'abc')); //false

// ------------Refactored Greeting-------------

// class Person {
//   constructor(myName) {
//     this.name = myName;
//   }
//   greet(yourName) {
//     return `Hello ${yourName}, my name is ${this.name}`;
//   }
// }

// ----------------Elapsed Seconds--------------
// const mlsecInSecond = 1000;

// function elapsedSeconds(startDate, endDate) {
//   return (endDate - startDate) / mlsecInSecond;
// }

// console.log(
//   elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2)) // 2
// );

// -------------Odd or Even?--------------

// function oddOrEven(array) {
//   const sumOfArr = array.reduce((acc, numb) => acc + numb, 0);
//   return sumOfArr % 2 ? 'odd' : 'even';
// }

// console.log(oddOrEven([0, 1, 4])); //odd
// console.log(oddOrEven([0, -1, -5])); //even

// --------reverseIt-----------

// function reverseIt(data) {
//   if (typeof data === 'string') {
//     return data.split('').reverse().join('');
//   }
//   if (typeof data === 'number') {
//     const result = String(data).split('').reverse().join('');
//     return Number(result);
//   }
//   return data;
// }

// console.log(reverseIt('Hello')); // "olleH"
// console.log(reverseIt(314159)); // 951413

// -------------Numbers in strings----------

// 1st option

// function solve(s) {
//   return Math.max(...s.match(/\d+/g));
// }

// 2nd option
// function solve(s) {
//   let result = '';
//   let compareNumb = '';
//   const arrOfNumb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   for (let i = 0; i <= s.length; i++) {
//     if (arrOfNumb.includes(s[i])) {
//       compareNumb += s[i];
//       continue;
//     }
//     if (Number(compareNumb) > Number(result)) {
//       result = compareNumb;
//     }
//     compareNumb = '';
//   }

//   return +result;
// }

// console.log(solve('gh12cdy695m1')); //695
// console.log(solve('2ti9iei7qhr5')); //9
// console.log(solve('lu1j8qbbb85')); //85

// --------Closing in Sum-----------

// function closingInSum(n) {
//   const splitNumb = String(n).split('');
//   const arrOfNumb = [];

//   while (splitNumb.length > 0) {
//     const firstNumb = splitNumb.shift();
//     const lastNumb = splitNumb.pop();
//     if (lastNumb) {
//       arrOfNumb.push(firstNumb + lastNumb);
//     } else {
//       arrOfNumb.push(firstNumb);
//     }
//   }

//   return arrOfNumb.reduce((acc, item) => acc + Number(item), 0);
// }

// console.log(closingInSum(121)); //13

// ----------Number-Star ladder----------

// 1st option
// function pattern(n) {
//   let result = '1';
//   for (let i = 2; i <= n; i++) {
//     result += '\n1' + '*'.repeat(i - 1) + i;
//   }
//   return result;
// }

// 2nd option
// function pattern(n) {
//   let result = '1';
//   for (let i = 2; i <= n; i++) {
//     result += '\n' + '1' + ''.padStart(i - 1, '*') + i;
//   }
//   return result;
// }

// console.log(pattern(3)); // "1\n1*2\n1**3"

// ------------Multiples of 3 and 5 redux---------------

// 1st option
// function solution(number) {
//   const sumDivisibleBy = num => {
//     const numbSmallerOrEqual = Math.floor((number - 1) / num);
//     return (num * numbSmallerOrEqual * (numbSmallerOrEqual + 1)) / 2;
//   };

//   const sumOfThrees = sumDivisibleBy(3);
//   const sumOfFives = sumDivisibleBy(5);
//   const sumOfFifteens = sumDivisibleBy(15);

//   return sumOfThrees + sumOfFives - sumOfFifteens;
// }

// 2nd option
// function solution(number) {
//   let result = 0;

//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }

//   return result;
// }

// console.log(solution(10)); // 23

// -----------Simple beads count----------

// 1st option
// function countRedBeads(n) {
//   return n < 2 ? 0 : (n - 1) * 2;
// }

// 2nd option
// const countRedBeads = n => n && --n * 2;

// console.log(countRedBeads(0)); // 0
// console.log(countRedBeads(1)); // 0
// console.log(countRedBeads(3)); // 4

// -------Find The Parity Outlier--------

// 1st option
// function findOutlier(integers) {
//   let oddNumbs = [];
//   let evenNumbs = [];

//   integers.forEach(numb => {
//     if (numb % 2 === 0) {
//       evenNumbs.push(numb);
//     } else {
//       oddNumbs.push(numb);
//     }
//   });

//   return oddNumbs.length === 1 ? oddNumbs[0] : evenNumbs[0];
// }

// 2nd option
// function findOutlier(integers) {
//   let oddNumbs = integers.filter(numb => numb % 2 === 0);
//   let evenNumbs = integers.filter(numb => numb % 2 !== 0);

//   return oddNumbs.length === 1 ? oddNumbs[0] : evenNumbs[0];
// }

// console.log(findOutlier([2, 6, 8, 10, 3])); // 3

// -------------Boiled Eggs--------------

// function cookingTime(eggs) {
//   return Math.ceil(eggs / 8) * 5;
// }

// console.log(cookingTime(0)); //0
// console.log(cookingTime(5)); //5
// console.log(cookingTime(8)); //10

// ------------Calculate Julie's Age----------

// function age(x, y) {
//   return x / (y - 1) + x;
// }

/*
j = b + x
j = b * y
b * y = b + x
b * y - b = x
b(y - 1) = x
b = x / (y - 1)

j = x / (y - 1) + x

*/
// console.log(age(6, 3)); // 9

// ----------Build Tower--------------

// 1st option
// function towerBuilder(nFloors) {
//   return [...new Array(nFloors)].map(
//     (_, ind) =>
//       ' '.repeat(nFloors - ind - 1) +
//       '*'.repeat(ind * 2 + 1) +
//       ' '.repeat(nFloors - ind - 1)
//   );
// }

// 2nd option
// function towerBuilder(nFloors) {
//   const result = [];
//   let counter = 1;

//   for (let i = 1; i <= nFloors; i++) {
//     result.push(
//       `${' '.repeat(nFloors - i)}${'*'.repeat(counter)}${' '.repeat(
//         nFloors - i
//       )}`
//     );
//     counter += 2;
//   }

//   return result;
// }

// 3rd option
// function towerBuilder(nFloors) {
//   return Array.from({ length: nFloors }, function (_, ind) {
//     const spaces = ' '.repeat(nFloors - ind - 1);
//     return spaces + '*'.repeat(ind + ind + 1) + spaces;
//   });
// }

// console.log(towerBuilder(1)); // ['*'];
// console.log(towerBuilder(2)); // [' * ', '***'];
// console.log(towerBuilder(3)); // ['  *  ', ' *** ','*****'];

// --------Multiples of 3 or 5---------

// function solution(number) {
//   let result = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }

//   return result;
// }

// console.log(solution(-9)); //0
// console.log(solution(10)); //23

// ------Find the odd int----

// 1st option
// function findOdd(A) {
//   return A.reduce((a, b) => a ^ b);
// }

// 2nd option
// function findOdd(A) {
//   return A.find(item => A.filter(numb => numb === item).length % 2);
// }

// 3rd option
// function findOdd(A) {
//   const sortObj = A.reduce((acc, numb) => {
//     acc[numb] ? (acc[numb] += 1) : (acc[numb] = 1);
//     return acc;
//   }, {});

//   const sortObjValues = Object.keys(sortObj);

//   for (let i = 0; i < sortObjValues.length; i++) {
//     if (sortObj[sortObjValues[i]] % 2 !== 0) {
//       return +sortObjValues[i];
//     }
//   }
// }

// 4rd option
// function findOdd(A) {
//   const sortObj = A.reduce((acc, numb) => {
//     acc[numb] ? (acc[numb] += 1) : (acc[numb] = 1);
//     return acc;
//   }, {});

//   for (let key in sortObj) {
//     if (sortObj.hasOwnProperty(key) && sortObj[key] % 2 !== 0) {
//       return +key;
//     }
//   }
// }

// console.log(findOdd([7])); //7
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //-1

// ------------Sum of Digits / Digital Root---------------

// 1st option
// function digitalRoot(n) {
//   if (n < 10) return n;

//   const sumOfDigits = String(n)
//     .split('')
//     .reduce((acc, numb) => acc + +numb, 0);

//   return digitalRoot(sumOfDigits);
// }

// 2nd option
// function digitalRoot(n) {
//   return ((n - 1) % 9) + 1; // formula of digital root
// }

// console.log(digitalRoot(16)); // 7
// console.log(digitalRoot(456)); // 6
