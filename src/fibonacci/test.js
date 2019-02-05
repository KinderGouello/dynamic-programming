const fibonacci = require('./fibonacci');
const fibonacciDynamic = require('./fibonacci-dynamic');

test('normal', () => {
  console.time('test');
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(9)).toBe(34);
  expect(fibonacci(32)).toBe(2178309);
  console.timeEnd('test');
});
test('dynamic', () => {
  console.time('test');
  expect(fibonacciDynamic(2)).toBe(1);
  expect(fibonacciDynamic(9)).toBe(34);
  expect(fibonacciDynamic(32)).toBe(2178309);
  console.timeEnd('test');
});
