'use strict';
let arr = [5, 3, 0, 11, 30];

function getSumm(arr) {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return summ;
}

console.log("Input array: " + arr);
console.log("Summ: " + getSumm(arr));
