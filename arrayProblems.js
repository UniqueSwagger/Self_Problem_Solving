function printArray(arr) {
  arr.forEach((element) => console.log(element));
}
function arraySum(arr) {
  return arr.reduce((total, number) => total + number);
}
function average(arr) {
  return arraySum(arr) / arr.length;
}

function arrayMax(arr) {
  return Math.max(...arr);
}
function arrayMin(arr) {
  return Math.min(...arr);
}
function arraySort(arr) {
  return arr.sort((a, b) => a - b);
}
function arrayReverse(arr) {
  return arr.reverse();
}
function arrayUnique(arr) {
  return [...new Set(arr)];
}
function arrayShuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
function arrayRemove(arr, index) {
  return arr.splice(index, 1);
}
function arrayInsert(arr, index, value) {
  arr.splice(index, 0, value);
  return arr;
}
function arraySwap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
function arrayDuplicate(arr, index) {
  arr.splice(index, 0, arr[index]);
  return arr;
}
function arrayDuplicateN(arr, index, n) {
  for (let i = 0; i < n; i++) {
    arr.splice(index, 0, arr[index]);
  }
  return arr;
}
function arrayFill(arr, value) {
  return arr.fill(value);
}
function arrayFillN(arr, value, n) {
  return arr.fill(value, 0, n);
}
function arrayRotate(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
function arrayRotateN(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
function arrayRotateReverse(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
function arrayRotateReverseN(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
function arrayRotateReverseN(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
function arrayDiff(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}
