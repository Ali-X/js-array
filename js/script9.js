let str = "А роза упала на лапу Азора";

function isPalindrom(str) {
  let withoutSpaceStr = str.replace(/\s/g, '').toLowerCase();
  let newWord = "";

  for (let i = withoutSpaceStr.length - 1; i >= 0; i--) {
    newWord += withoutSpaceStr[i];
  }

  return withoutSpaceStr === newWord;
}

console.log("Is string " + str + " palindrom?");
console.log(isPalindrom(str));