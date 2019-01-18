let arr = [1, -2, 3, 4, -9, 6];

function getSubArrays(arr) {
  let maxSumm = Number.MIN_VALUE;
  let maxSummArr = [];
  let step = 1;
  let arrLength = arr.length;

  do {
    for (var i = 0; i < arrLength; i++) {
      let tempSumm = 0;

      if ((i + step) > arrLength) {
        break;
      }

      let newArr = arr.slice(i, i + step);

      for (let j = 0; j < newArr.length; j++) {
        tempSumm += newArr[j];
      }

      if (tempSumm > maxSumm) {
        maxSumm = tempSumm;
        maxSummArr = newArr;
      }
    }

    step++;

  } while (step <= arrLength);

  return maxSummArr;
}

console.log("Input array: " + arr);
console.log("Subarrays:");
console.log(getSubArrays(arr));
