function factorial(n) {
  let result = BigInt(1);
  for (let i = BigInt(2); i <= n; i++) {
    result *= i;
  }
  return console.log(BigInt(result).toString());
}
factorial(30);
