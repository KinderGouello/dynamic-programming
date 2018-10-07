const maxDivide = (number, divider) => {
  while (number % divider === 0) {
    number = number / divider;
  }

  return number;
}

const isUgly = (number) => {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);

  return (number === 1) ? true : false;
}

module.exports = (number) => {
  let i = 1;
  let nthNumber = 1;

  while (number > nthNumber) {
    i++;
    if (isUgly(i)) {
      nthNumber++; 
    }
  }

  return i;
}
