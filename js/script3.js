let students = {Anna: 29, Misha: 35, Stepan: 1, Elena: 99};


function getBestStudent(students) {
  let minMark = Number.MIN_VALUE;
  let bestStudent;

  for (let st in students) {
    let studentMark = students[st];

    if (studentMark > minMark) {
      minMark = studentMark;
      bestStudent = st;
    }
  }

  return bestStudent;
}

console.log(getBestStudent(students));