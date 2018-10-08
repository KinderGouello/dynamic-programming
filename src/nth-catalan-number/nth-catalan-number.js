const catalanNumber = (number) => {
  if (number <= 1) return 1
  
  let res = 0;
  for (let i = 0; i < number; i++) {
    res += catalanNumber(i) * catalanNumber(number - i - 1);
  }

  return res;
}

module.exports = catalanNumber;
