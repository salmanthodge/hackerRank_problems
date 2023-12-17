function repeatedString(str, n) {
  let reapetedstr = "";
  let count = 0;
  while (reapetedstr.length < n) {
    reapetedstr += str;
    // console.log(reapetedstr);
  }
  let finalstr = reapetedstr.slice(0, n);
  // console.log(finalstr);

  for (let i = 0; i < n; i++) {
    if (finalstr[i] == "a") {
      count++;
    }
  }
  console.log(count);
}
repeatedString("aba", 10);
// repeatedString("a",1000)

//pending-------test cases for larger inputs
