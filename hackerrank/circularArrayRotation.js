function circularArrayRotation(arr, queries) {
  const k = 2; // Number of right circular rotations
  console.log(arr, "before");
  // [3, 4, 5] => [5, 3, 4] => [4, 5, 3]  => rotate k times here k =2
  // Perform right circular rotations
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }

  console.log(arr, "after");

  // Retrieve values at the given indices
  const results = [];
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i];
    results.push(arr[index]);
  }

  console.log(results);
  return results;
}

// Example usage
circularArrayRotation([3, 4, 5], [1, 2]);
