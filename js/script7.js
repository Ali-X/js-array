'use strict';
let arr = [1, 2, 3, 4];

function getSubArrays(arr) {
  let newArr = [];
  let step = 1;
  let arrLength = arr.length;

  do {
    for (var i = 0; i < arrLength; i++) {
      if ((i + step) > arrLength) {
        break;
      }

      newArr.push(arr.slice(i, i + step));
    }

    step++;

  } while (step <= arrLength);

  return newArr;
}

console.log("Input array: " + arr);
console.log("Subarrays:");
console.log(getSubArrays(arr));
