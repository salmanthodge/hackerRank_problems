function twoStrings(s1, s2) {
  const charSet = new Set(s1);
  // console.log(charSet)

  for (let i = 0; i < s2.length; i++) {
    // console.log(s2[i])
    if (charSet.has(s2[i])) {
      // console.log(charSet)
      // console.log(s2[i])
      return console.log("YES");
    }
  }

  return console.log("NO");
}
twoStrings("hello", "world");
