function plusminus(arr) {
  const sum = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let pcount = 0;
  let ncount = 0;
  let zcount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pcount++;
    }
    if (arr[i] < 0) {
      ncount++;
    }
    if (arr[i] == 0) {
      zcount++;
    }
  }
  console.log(pcount, "pp");
  console.log(ncount, "nn");
  console.log(zcount, "zz");
  console.log(sum);
  sum1 = pcount / sum;
  sum2 = ncount / sum;
  sum3 = zcount / sum;
  console.log(sum1.toFixed(6), sum2.toFixed(6), sum3.toFixed(6));
}
arr = [-4, 3, -9, 0, 4, 1];
plusminus(arr);
