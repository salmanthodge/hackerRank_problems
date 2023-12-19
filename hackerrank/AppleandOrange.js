function countAppleandOrange(
  startpoint,
  endpoint,
  appletree,
  orangetree,
  arrA,
  arrO
) {
  // let startpoint=7
  // let endpoint=11
  // let appletree=5
  // let orangetree=15
  // let arrA=[-2,2,1] //array of apples distance
  // let arrO =[5,-6]  //array of oranges distance
  let Applecount = 0;
  let Orangecount = 0;

  // //for apple count
  for (let i = 0; i < arrA.length; i++) {
    // console.log(arrA[i]);
    if (arrA[i] + appletree >= startpoint && arrA[i] + appletree <= endpoint) {
      Applecount++;
    }
  }
  console.log("apple counts", Applecount);

  //for orange count
  for (let i = 0; i < arrO.length; i++) {
    // console.log(arrO[i]);
    if (
      arrO[i] + orangetree >= startpoint &&
      arrO[i] + orangetree <= endpoint
    ) {
      Orangecount++;
    }
  }
  console.log("orange counts", Orangecount);
}
countAppleandOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
