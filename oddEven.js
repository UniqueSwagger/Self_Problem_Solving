function oddEven(num) {
  if (num < 0) return "invalid";
  else if (num % 2) return `${num} is odd`;
  else return `${num} is even`;
}
console.log(oddEven(34));
function oddEvenRange(num1, num2) {
  let result = [];
  for (let i = num1; i <= num2; i++) {
    result.push(oddEven(i));
  }
  return result;
}
