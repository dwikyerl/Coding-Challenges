function sms(string, K) {
  const sms = string.split(' ');
  let message = [];
  let index = 0;
  for (let word of sms) {
    let temp = '';
    if (message[index]) temp += `${message[index]} ${word}`;
    else temp += word;

    if (temp.length <= K) {
      message[index] = temp.trim();
    } else {
      index += 1;
      message.push(word);
    }
  }

  return message;
}

console.log(sms('SMS messages are really short', 12));
