const fibonacci = require('./fibonacci');
const fibonacciDynamic = require('./fibonacci-dynamic');

test('normal', () => {
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(9)).toBe(34);
  expect(fibonacci(32)).toBe(2178309);
});
test('dynamic', () => {
  expect(fibonacciDynamic(2)).toBe(1);
  expect(fibonacciDynamic(9)).toBe(34);
  expect(fibonacciDynamic(32)).toBe(2178309);
});
