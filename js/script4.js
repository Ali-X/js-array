let arr = [5, 10, 9, 0, 1];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeMess(arr) {
  let newArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let randomPosition;
    let arrElement;

    do {
      randomPosition = getRandomInt(0, arrLength - 1);
      arrElement = arr[randomPosition];
    } while (arrElement === undefined);

    newArr.push(arrElement);
    delete arr[randomPosition];
  }

  return newArr;
}

console.log("Before: " + arr);
console.log("After: " + makeMess(arr));