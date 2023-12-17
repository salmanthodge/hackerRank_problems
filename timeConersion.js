function timeConversion(s) {
  // Write your code here
  let ampm = s.charAt(8);
  let hourstime = "";
  if (ampm == "A") {
    if (s.substring(0, 2) == "12") {
      hourstime = "00";
    } else {
      hourstime = s.substring(0, 2);
    }
  } else {
    if (s.substring(0, 2) == "12") {
      hourstime = s.substring(0, 2);
    } else {
      hourstime = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  console.log(hourstime + s.substring(2, 8));
  return hourstime + s.substring(2, 8);
}
timeConversion("07:05:45PM");
