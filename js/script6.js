'use strict';
let arr = [5, 3, 0, 11, 30];

function getMax(arr) {
  let maxElement = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];

    if (arrElement > maxElement) {
      maxElement = arrElement;
    }
  }

  return maxElement;
}

console.log("Input array: " + arr);
console.log("Max element: " + getMax(arr));
