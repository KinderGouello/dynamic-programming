const binomialCoefficient = require('./binomial-coefficient');
const binomialCoefficientDynamic = require('./binomial-coefficient-dynamic');

test('normal', () => {
  console.time('test');
  expect(binomialCoefficient(3, 2)).toBe(3);
  expect(binomialCoefficient(4, 3)).toBe(4);
  expect(binomialCoefficient(4, 2)).toBe(6);
  expect(binomialCoefficient(5, 2)).toBe(10);
  expect(binomialCoefficient(80, 5)).toBe(24040016);
  console.timeEnd('test');
});
test('dynamic', () => {
  console.time('test');
  expect(binomialCoefficientDynamic(3, 2)).toBe(3);
  expect(binomialCoefficientDynamic(4, 3)).toBe(4);
  expect(binomialCoefficientDynamic(4, 2)).toBe(6);
  expect(binomialCoefficientDynamic(5, 2)).toBe(10);
  expect(binomialCoefficientDynamic(80, 5)).toBe(24040016);
  console.timeEnd('test');
});
