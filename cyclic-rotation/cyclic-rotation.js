const assert = require('assert');

function rotateArray(arr, K) {
  const rotatedArr = [...arr];
  for (let i = 0; i < K; i += 1) {
    rotatedArr.unshift(rotatedArr.pop());
  }

  return rotatedArr;
}

assert.deepEqual(rotateArray([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
assert.deepEqual(rotateArray([0, 0, 0], 1), [0, 0, 0]);
assert.deepEqual(rotateArray([1, 2, 3, 4], 4), [1, 2, 3, 4]);
