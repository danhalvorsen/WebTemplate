export class Calculator {
  // Method to add two numbers
  public add(a: number, b: number): number {
    return a + b;
  }

  // Method to subtract the second number from the first
  public sub(a: number, b: number): number {
    return a - b;
  }

  // Method to multiply two numbers
  public mul(a: number, b: number): number {
    return a * b;
  }

  // Method to divide the first number by the second
  // Throws an error if division by zero is attempted
  public div(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}
