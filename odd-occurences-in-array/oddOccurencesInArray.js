function oddOccurencesInArray(arr) {
  let missing_int = 0;
  for (let value of arr) {
    missing_int ^= value;
  }

  return missing_int;
}

console.log(oddOccurencesInArray([9, 3, 9, 3, 9, 7, 7]));
