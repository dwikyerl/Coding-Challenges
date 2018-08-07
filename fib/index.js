// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoization(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args] !== undefined) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoization(slowFib);

console.log(fib(49));

module.exports = fib;
