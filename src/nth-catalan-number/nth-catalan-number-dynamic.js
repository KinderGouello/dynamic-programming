module.exports = (number) => {
  const catalanNumbers = [1, 1];
  
  for (let i = 2; i <= number; i++) {
    catalanNumbers[i] = 0;
    for (let j = 0; j < i; j++) {
      catalanNumbers[i] += catalanNumbers[j] * catalanNumbers[i - j - 1];
    }
  }

  return catalanNumbers[number];
}
