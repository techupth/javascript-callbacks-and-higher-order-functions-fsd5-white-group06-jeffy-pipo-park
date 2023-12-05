const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 70) {
      count ++
    }
    if (count >= 5) {
      return true
    }
  }
  return false
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1);
console.log(scoreRoom1Result)
let scoreRoom2Result = atLeastFive(studentScoresRoom2);
console.log(scoreRoom2Result)
let scoreRoom3Result = atLeastFive(studentScoresRoom3);
console.log(scoreRoom3Result)