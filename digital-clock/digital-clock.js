function digitalClock(A, B, C, D, E, F) {
  // High numbers 6-9
  const high_numbers = [];
  // Low numbers 0-5
  const low_numbers = [];

  // Get all numbers into an array and sort ascending;
  const numbers = [...arguments].sort((a, b) => a > b);

  // Split numbers into high numbers and low numbers
  for (let num of numbers) {
    if (num > 5) high_numbers.push(num);
    else low_numbers.push(num);
  }

  const hc = high_numbers.length;
  const lc = low_numbers.length;

  // Initialize time to stored time numbers to be converted to string
  let timeArr = [];
  // Case 1 : High Numbers is more than low numbers
  // It is not possible to create valid number
  if (hc > lc) return 'NOT POSSIBLE';
  // Case 2 : High Numbers length is equals to low numbers length
  // Alternately combine low numbers and high numbers
  else if (hc === lc) {
    for (let i = 0; i < hc + lc; i += 1) {
      if (i % 2 === 0) timeArr.push(low_numbers.shift());
      else timeArr.push(high_numbers.shift());
    }
  }
  // Case 3 : Concat low numbers and high numbers if high numbers length
  // less than low numbers length and high numbers length less than 2
  // (Because we want earliest time)
  else if (hc < lc && hc < 2) {
    timeArr = low_numbers.concat(high_numbers);
  }
  // Case 4 : If high numbers length is equal 2
  // Do the same as before but swap number in index 3 and number in index 4
  else {
    timeArr = low_numbers.concat(high_numbers);
    [timeArr[3], timeArr[4]] = [timeArr[4], timeArr[3]];
  }
  // Check if it is valid time or not
  if (!validTime(timeArr)) return 'NOT POSSIBLE';

  // Generate digital clock array
  return generateClock(timeArr);
}

function generateClock(timeArr) {
  let time = '';

  for (let i = 0; i < timeArr.length; i += 1) {
    if (i > 0 && i % 2 === 0) time += ':';
    time += timeArr[i];
  }
  return time;
}

function validTime(time) {
  return (
    validHour(`${time[0]}${time[1]}`) &&
    validMinuteOrSecond(`${time[2]}${time[3]}`) &&
    validMinuteOrSecond(`${time[4]}${time[5]}`)
  );
}

function validHour(hour) {
  return parseInt(hour) < 24;
}

function validMinuteOrSecond(time) {
  return time < 60;
}

console.log(digitalClock(1, 8, 3, 2, 6, 4));
console.log(digitalClock(0, 0, 0, 0, 0, 0));
console.log(digitalClock(0, 0, 0, 7, 8, 9));
console.log(digitalClock(2, 4, 5, 9, 5, 9));
console.log(digitalClock(2, 5, 5, 9, 5, 9));
