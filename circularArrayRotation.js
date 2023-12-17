function circularArrayRotation(arr, queries) {
  const k = 2; // Number of right circular rotations

  // Perform right circular rotations
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }

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
