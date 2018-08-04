function binaryGap(number) {
  const binary = number.toString(2);
  let longestGap = 0;
  let temp = 0;
  let isGap = false;
  for (let i = 0; i < binary.length; i += 1) {
    // See if previous binary is 1, if it is and current binary is 0
    // isGap is true because it is start of gap
    if (binary[i - 1] === '1' && binary[i] === '0') {
      isGap = true;
    }
    // Else if current binary is 1, it is no longer a gap
    else if (binary[i] === '1') {
      isGap = false;
    }

    // If current binary is part of gap increase temp which is gap length by 1
    if (isGap) temp += 1;
    // Else if current binary is no longer a part of gap, check length stored in temp
    // if its value greater than current longest gap
    // set longest gap by its value and reset temp
    else if (!isGap && temp > longestGap) {
      longestGap = temp;
      temp = 0;
      // if temp not greater than value stored in longest gap reset it to zero
    } else temp = 0;
  }

  return longestGap;
}

console.log(binaryGap(561892));
