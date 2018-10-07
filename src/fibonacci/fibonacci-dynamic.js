const fibonacci = (number) => {
  const fibonaccis = [0, 1];

  for (let i = 2; i <= number; i++) {
    fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2];
  }

  return fibonaccis[number];
}

module.exports = fibonacci;
