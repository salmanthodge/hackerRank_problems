arr = [2, 3, 1, 4];
temp = 0;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    // console.log("iieee",arr[i])
    if (arr[i] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    // console.log("jayyy",arr[j])
  }
}
console.log(arr);
