import { greet } from '../../src/greet';

describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
