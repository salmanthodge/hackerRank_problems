function migratoryBirds(arr) {
  // Write your code here
  let count = {};
  let maxCount = 0;
  let mostRepeatedValue = Number.MAX_SAFE_INTEGER;
  console.log(mostRepeatedValue);

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    console.log("currentElement", currentElement);
    count[currentElement] = (count[currentElement] || 0) + 1;
    console.log("count[currentElement]", count[currentElement]);

    console.log("object", count);

    if (
      count[currentElement] > maxCount ||
      (count[currentElement] === maxCount && currentElement < mostRepeatedValue)
    ) {
      console.log(
        count[currentElement] > maxCount ||
          (count[currentElement] === maxCount &&
            currentElement < mostRepeatedValue)
      );
      maxCount = count[currentElement];
      console.log("maxCount", maxCount);
      mostRepeatedValue = currentElement;
      console.log("mostRepeatedValue", mostRepeatedValue);
    }
  }
  console.log(mostRepeatedValue, "final answer");
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
// migratoryBirds([1, 4, 4, 4, 5, 3]);
