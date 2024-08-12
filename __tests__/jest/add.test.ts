import * as CALC from '../../src/add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(CALC.sum(0, 0)).toBe(0);
    expect(CALC.sum(0, 1)).toBe(1);
    expect(CALC.sum(1, 0)).toBe(1);
    expect(CALC.sum(1, 1)).toBe(2);
  });
});
