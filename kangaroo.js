function kangaroo(x1, v1, x2, v2) {
  let result = "NO";
  for (let i = 0; i < 10000 && result == "NO"; i++) {
    if (x1 + v1 * i == x2 + v2 * i) {
      result = "YES";
    }
  }
  console.log(result);
  return result;
}
kangaroo(0, 3, 4, 2);
