const nthCatalanNumber = require('./nth-catalan-number');
const nthCatalanNumberDynamic = require('./nth-catalan-number-dynamic');

test('normal', () => {
  console.time('test');
  expect(nthCatalanNumber(0)).toBe(1);
  expect(nthCatalanNumber(1)).toBe(1);
  expect(nthCatalanNumber(3)).toBe(5);
  expect(nthCatalanNumber(16)).toBe(35357670);
  console.timeEnd('test');
});
test('dynamic', () => {
  console.time('test');
  expect(nthCatalanNumberDynamic(0)).toBe(1);
  expect(nthCatalanNumberDynamic(1)).toBe(1);
  expect(nthCatalanNumberDynamic(3)).toBe(5);
  expect(nthCatalanNumberDynamic(16)).toBe(35357670);
  console.timeEnd('test');
});
