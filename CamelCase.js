function repeatedString(str) {
  let result = [];
  let currentword = "";

  for (i = 0; i < str.length; i++) {
    const currentchar = str[i];

    if (
      currentchar === currentchar.toUpperCase() &&
      currentchar !== currentchar.toLowerCase()
    ) {
      // console.log(currentchar)
      // console.log(currentword)

      if (currentword.length > 0) {
        result.push(currentword);
        currentword = "";
        console.log("first-->", currentword, result);
      }
    }
    currentword += currentchar;
    console.log(currentword);
  }
  console.log(currentword);
  if (currentword.length > 0) {
    console.log(currentword.length);
    result.push(currentword);
  }
  console.log(result);
  console.log(result.length);
}
repeatedString("saveChangesInTheEditor");
