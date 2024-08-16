export class Calculator {
  // Method to add two numbers
  add(a: number, b: number): number {
    return a + b;
  }

  // Method to subtract the second number from the first
  sub(a: number, b: number): number {
    return a - b;
  }

  // Method to multiply two numbers
  mul(a: number, b: number): number {
    return a * b;
  }

  // Method to divide the first number by the second
  // Throws an error if division by zero is attempted
  div(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}
