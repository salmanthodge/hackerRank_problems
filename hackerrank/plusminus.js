function plusminus(arr) {
  const n = arr.length;
  let positivesum = 0;
  let negativesum = 0;
  let zerosum = 0;
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
  // console.log(pcount, "positive");
  // console.log(ncount, "negative");
  // console.log(zcount, "zero");
  // console.log(n);
  positivesum = pcount / n;
  negativesum = ncount / n;
  zerosum = zcount / n;
  console.log(
    positivesum.toFixed(6),
    "\n",
    negativesum.toFixed(6),
    "\n",
    zerosum.toFixed(6)
  );
}
arr = [-4, 3, -9, 0, 4, 1];
plusminus(arr);
