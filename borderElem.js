function borderElem(arr) {
  const n = arr.length;
  let resultedArry = [];

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i == 0 || j == n - 1) {
        resultedArry.push(arr[i][j]);
      }
    }
  }
  for (i = n - 1; i >= 0; i--) {
    for (j = n - 2; j >= 0; j--) {
      if (i == n - 1 || (j == 0 && i != 0)) {
        resultedArry.push(arr[i][j]);
      }
    }
  }
  console.log(resultedArry);
}
let arr = [
  [4, 9, 6, 2],
  [11, 12, 16, 13],
  [23, 19, 18, 17],
  [31, 30, 33, 36],
];
// let arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
borderElem(arr);
