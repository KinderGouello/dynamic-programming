module.exports = (n, k) => {
  const array = [];

  for (let i = 0; i < n + 1; i++) {
    array[i] = [];
    array[i][0] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      if (i === j) {
        array[i][j] = 1;
      } else {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
      }
    }
  }

  return array[n][k];
}
