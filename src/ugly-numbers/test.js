const uglyNumbers = require('./ugly-numbers');
const uglyNumbersDynamic = require('./ugly-numbers-dynamic');

test('normal', () => {
  console.time('test');
  expect(uglyNumbers(7)).toBe(8);
  expect(uglyNumbers(10)).toBe(12);
  expect(uglyNumbers(15)).toBe(24);
  expect(uglyNumbers(150)).toBe(5832);
  expect(uglyNumbersDynamic(25000)).toBe(1737206427048600700000);
  console.timeEnd('test');
});
test('dynamic', () => {
  console.time('test');
  expect(uglyNumbersDynamic(7)).toBe(8);
  expect(uglyNumbersDynamic(10)).toBe(12);
  expect(uglyNumbersDynamic(15)).toBe(24);
  expect(uglyNumbersDynamic(150)).toBe(5832);
  expect(uglyNumbersDynamic(25000)).toBe(1737206427048600700000);
  console.timeEnd('test');
});
