const cap = require('./capitalize.js')

test('first character is upper case', () => {
    expect(cap('hello')).toBe('Hello');
  });