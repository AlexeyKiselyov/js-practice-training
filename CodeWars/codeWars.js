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
