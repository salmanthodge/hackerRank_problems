function birthdayCake(candles) {
  let max = Math.max(...candles);
  console.log(max);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }
  console.log(count);
  return count;
}

birthdayCake([4, 2, 1, 0]);
