// ./src/__tests__/calculator.test.ts

import { Calculator } from '../calculator';
describe('Calculator Tests', () => {
  const calculator = new Calculator();

  it('should return 5 when adding 2 and 3', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should return 0 when adding -1 and 1', () => {
    const result = calculator.add(-1, 1);
    expect(result).toBe(0);
  });

  it('should return a negative number when adding two negative numbers', () => {
    const result = calculator.add(-3, -6);
    expect(result).toBe(-9);
  });
});
