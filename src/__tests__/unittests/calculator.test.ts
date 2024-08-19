// ./src/__tests__/calculator.test.ts

import { fixture, html } from '@open-wc/testing';
import { expect } from 'chai';
import { Calculator } from '../../calculator.js';
describe('Calculator Tests', () => {
  const calculator = new Calculator();

  it('should return 5 when adding 2 and 3', () => {
    const result = calculator.add(2, 3);
    expect(result).to.be.equal(5);
  });

  it('should return 0 when adding -1 and 1', () => {
    const result = calculator.add(-1, 1);
    expect(result).to.be.equal(0);
  });

  it('should return a negative number when adding two negative numbers', () => {
    const result = calculator.add(-3, -6);
    expect(result).to.be.equal(-9);
  });
});
