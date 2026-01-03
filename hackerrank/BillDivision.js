function bonAppetit(bill, k, b) {
  // Write your code here
  // let removeditem = bill.splice(k, 1);
  // console.log(removeditem)
  // console.log(bill)
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }
  //   console.log(sum);

  let ba = sum / 2;
  // console.log(ba)
  // console.log(b)
  if (b > ba) {
    console.log(b - ba);
  } else {
    console.log("Bon Appetit");
  }
}
bonAppetit([3, 10, 2, 9], 1, 12);
