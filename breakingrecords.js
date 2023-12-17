function breakingRecords(scores) {
  let highestscore = scores[0];
  let lowestscore = scores[0];
  let highcount = 0;
  let lowcount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestscore) {
      highestscore = scores[i];
      console.log(highestscore);
      highcount++;
    }
    if (scores[i] < lowestscore) {
      lowestscore = scores[i];
      console.log(lowestscore);
      lowcount++;
    }
  }
  return [highcount, lowcount];
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
