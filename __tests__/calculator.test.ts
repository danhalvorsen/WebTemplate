// __tests__/calculator.test.ts

import { expect } from 'chai';
import { add } from '../src/calculator';

describe('Calculator Tests', () => {
  it('should return 5 when adding 2 and 3', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return 0 when adding -1 and 1', () => {
    const result = add(-1, 1);
    expect(result).to.equal(0);
  });

  it('should return a negative number when adding two negative numbers', () => {
    const result = add(-3, -6);
    expect(result).to.equal(-9);
  });
});
