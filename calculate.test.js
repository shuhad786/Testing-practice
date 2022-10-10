const Calcultor = require('./calculate.js')

const cal = new Calcultor();

describe('calculate', () => {
    test('added up to be 3', () => {
      expect(cal.add(1, 2)).toBe(3);
    });
    
    test('added up to be 7', () => {
      expect(cal.add(3, 4)).toBe(7);
    });
      
    test('added up to be 11', () => {
      expect(cal.add(5, 6)).toBe(11);
    });

    test('subtracted up to be 1', () => {
      expect(cal.subtract(2, 1)).toBe(1);
    });

    test('subtracted up to be 2', () => {
      expect(cal.subtract(5, 3)).toBe(2);
    });

    test('subtracted up to be 3', () => {
      expect(cal.subtract(8, 5)).toBe(3);
    });

    test('multiplied up to be 2', () => {
      expect(cal.multiply(1, 2)).toBe(2);
    });

    test('multiplied up to be 12', () => {
      expect(cal.multiply(3, 4)).toBe(12);
    });

    test('multiplied up to be 30', () => {
      expect(cal.multiply(5, 6)).toBe(30);
    });

    test('divided up to be 2', () => {
      expect(cal.divide(4, 2)).toBe(2);
    });

    test('divided up to be 5', () => {
      expect(cal.divide(10, 2)).toBe(5);
    });

    test('divided up to be 4', () => {
      expect(cal.divide(12, 3)).toBe(4);
    });
    
  });