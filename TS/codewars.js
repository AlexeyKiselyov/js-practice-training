"use strict";
// ---------Vowel Count-------------
function getCount(str) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((acc, char) => {
        if (vowelsList.includes(char)) {
            acc += 1;
        }
        return acc;
    }, 0);
}
console.log(getCount('abracadabra'));
