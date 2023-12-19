function generateCombinations(arr) {
  const combinations = [];
  let Max;
  let Min;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    combinations.push(sum);
  }
  // return combinations;
  Max = Math.max(...combinations);
  Min = Math.min(...combinations);
  console.log(Max);
  console.log(Min);
  let result = Min + " " + Max;
  console.log(result);
  return;
}

const array = [1, 3, 5, 7, 9];
const result = generateCombinations(array);
// console.log(result);
