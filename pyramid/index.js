// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const columns = 2 * n - 1;
  for (let i = 0; i < n; i += 1) {
    let result = '';
    const bottomLimit = Math.floor(columns / 2) - i;
    const upperLimit = Math.floor(columns / 2) + i;
    for (let j = 0; j < columns; j += 1) {
      if (j >= bottomLimit && j <= upperLimit) result += '#';
      else result += ' ';
    }
    console.log(result);
  }
}

pyramid(4);

module.exports = pyramid;
