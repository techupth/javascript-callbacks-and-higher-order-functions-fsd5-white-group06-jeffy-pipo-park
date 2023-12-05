// Exercise #1: For Each Function

function forEach(array, operation) {
  operation(array);
}

function add5000(array) {
  for (let i of employeeSalaries) {
    console.log(i);
    array.push(i + 5000);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(newEmployeeSalaries, add5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
