'use strict';
let arr = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];
let arrLength = arr.length;
let bestResult = getBestResult();

function getBestResult() {
  let bestResult = Number.MIN_VALUE;

  for (let i = 0; i < arrLength; i++) {
    let arrElement = arr[i];

    if (arrElement > bestResult) {
      bestResult = arrElement;
    }
  }

  return bestResult;
}

function getGeneralInfo() {
  for (let i = 0; i < arrLength; i++) {
    console.log("Образец под номером " + (i + 1) + " - результат - " + arr[i]);
  }

  console.log("Всего проведено исследований: " + arrLength);
  console.log("Наилучший результат: " + bestResult);
}

function getBestResultNumbers() {
  let bestResultNumbers = [];

  for (let i = 0; i < arrLength; i++) {

    if (arr[i] === bestResult) {
      bestResultNumbers.push(i + 1);
    }
  }

  console.log("Образцы с наилучшими результатами под номерами: " + bestResultNumbers);
}

getGeneralInfo();
getBestResultNumbers();