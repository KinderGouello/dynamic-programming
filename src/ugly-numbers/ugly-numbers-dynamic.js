module.exports = (number) => {
  const ugly = [];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  ugly.push(1);

  let nextMultipleOf2 = 2;
  let nextMultipleOf3 = 3;
  let nextMultipleOf5 = 5;
  let nextUglyNumber = 1;

  for (let i = 1; i < number; i++) {
    nextUglyNumber = Math.min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
    ugly.push(nextUglyNumber);

    if (nextUglyNumber === nextMultipleOf2) {
      i2++;
      nextMultipleOf2 = ugly[i2] * 2;
    }
    if (nextUglyNumber === nextMultipleOf3) {
      i3++;
      nextMultipleOf3 = ugly[i3] * 3;
    }
    if (nextUglyNumber === nextMultipleOf5) {
      i5++;
      nextMultipleOf5 = ugly[i5] * 5;
    }
  }

  return nextUglyNumber;
}
