//Exercise #2: At Least Five Function

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

function filter(score) {
  return score > 70;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, filter);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, filter);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, filter);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
