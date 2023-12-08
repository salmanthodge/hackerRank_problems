function add(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = arr[i] + res;
  }
  console.log(res);
  return res;
}
console.log(add([100000001, 100000002, 100000003, 100000004, 100000005]));
