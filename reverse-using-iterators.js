// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (inputstring) => {
  const str = [];
  let i;
  for (i = 0; i < Math.floor((inputstring.length) / 2); i += 1) {
    str[inputstring.length - i - 1] = inputstring[i];
    str[i] = inputstring[inputstring.length - i - 1];
  }
  if (inputstring.length % 2 === 1) {
    str[i] = inputstring[i];
  }
  return str.join('');
};

module.exports = reverse;
