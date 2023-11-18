// ---------Vowel Count-------------

function getCount(str) {
  var vowelsList = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce(function (acc, char) {
    if (vowelsList.indexOf(char) >= 0) {
      acc += 1;
    }
    return acc;
  }, 0);
}
console.log(getCount('abracadabra'));
