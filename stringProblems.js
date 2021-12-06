function reverseString(str) {
  return str.split("").reverse().join("");
}
function numberOfVowels(str) {
  return str.match(/[aeiou]/gi).length;
}
