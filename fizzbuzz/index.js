// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    let output = '';
    if (i % 15 === 0) output = 'fizzbuzz';
    else if (i % 3 === 0) output = 'fizz';
    else if (i % 5 === 0) output = 'buzz';
    else output = i;
    console.log(output);
  }
}

module.exports = fizzBuzz;

// SOLUTION 1

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i += 1) {
//     let output = '';
//     if (i % 3 === 0) output = 'fizz';
//     if (i % 5 === 0) output += 'buzz';
//     if (i % 3 !== 0 && i % 5 !== 0) output = i;
//     console.log(output);
//   }
// }