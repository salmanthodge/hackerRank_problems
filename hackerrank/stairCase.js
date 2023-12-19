// function stairCase(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     // let str = "i";
//     for (let j = 1; j <= i; j++) {
//       str += "#" + "";
//       // str += "#" + "j";
//     }
//     console.log(str);
//   }
// }
// stairCase(4);

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let space = " ";
    // let space = "i";
    for (let j = 1; j <= n - i; j++) {
      space += " ";
      // space += "j";
    }
    for (let k = 1; k <= i; k++) {
      space += "#";
      // space += "k";
    }
    console.log(space);
  }
}
staircase(4);
