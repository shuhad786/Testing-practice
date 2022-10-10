const stringLength = require('./stringFunction.js');

test('returns character count', () => {
  expect(stringLength('hello')).toBe(5);
});

test('character count longer than 1', () => {
    expect(stringLength('a')).toBe(1);
  });

test('character count shorter than 10', () => {
    expect(stringLength('technique')).toBe(9);
  });
