const reverseString = require('./reverseFunction.js');

test('reversed the input string', () => {
    expect(reverseString("thank")).toBe("knaht");
  });