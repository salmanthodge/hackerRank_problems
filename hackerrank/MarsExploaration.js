function marsExploration(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i = i + 3) {
    if (s[i] !== "S") {
      count++;
    }
    if (s[i + 1] !== "O") {
      count++;
    }
    if (s[i + 2] !== "S") {
      count++;
    }
  }
  console.log(count);
}
marsExploration("SOSSPSSQSSOR");
