//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  return operation(array);
}
function checkScoreOver70(array) {
  let countOver70 = 0;
  //count over 70
  for (let i of array) {
    if (i >= 70) {
      countOver70++;
    }
  }
  // check count 5 or Over
  if (countOver70 >= 5) {
    return true;
  } else {
    return false;
  }
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScoreOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScoreOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScoreOver70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
