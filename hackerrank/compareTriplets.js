function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  let score = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }
  console.log(alice, "alice");
  console.log(bob, "bob");
  score.push(alice, bob);

  console.log(score);
  return score;
}
a = [13, 11, 3];
b = [3, 2, 11];
compareTriplets(a, b);
