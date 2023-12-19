function diagonaldiffernce(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        leftSum += arr[i][j];
      }
      if (i == arr.length - j - 1) {
        rightSum += arr[i][j];
      }
    }
  }
  const result = leftSum - rightSum;

  console.log(Math.abs(result));
  return Math.abs(result);
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
diagonaldiffernce(arr);
