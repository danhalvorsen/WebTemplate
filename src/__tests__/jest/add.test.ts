import { Calculator } from '../../calculator';

describe('add', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(0, 1)).toBe(1);
    expect(calculator.add(1, 0)).toBe(1);
    expect(calculator.mul(1, 1)).toBe(1);
  });
});
