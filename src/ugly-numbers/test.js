const uglyNumbers = require('./ugly-numbers');
const uglyNumbersDynamic = require('./ugly-numbers-dynamic');

test('normal', () => {
  expect(uglyNumbers(7)).toBe(8);
  expect(uglyNumbers(10)).toBe(12);
  expect(uglyNumbers(15)).toBe(24);
  expect(uglyNumbers(150)).toBe(5832);
  expect(uglyNumbersDynamic(9000)).toBe(66194422612734370);
});
test('dynamic', () => {
  expect(uglyNumbersDynamic(7)).toBe(8);
  expect(uglyNumbersDynamic(10)).toBe(12);
  expect(uglyNumbersDynamic(15)).toBe(24);
  expect(uglyNumbersDynamic(150)).toBe(5832);
  expect(uglyNumbersDynamic(9000)).toBe(66194422612734370);
});
