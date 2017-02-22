// @flow

export default class {
  operator: string;
  operand1: number;
  operand2: number;
  constructor(sign: string, num1: number, num2: number) {
    this.operator = sign;
    this.operand1 = num1;
    this.operand2 = num2;
  }
  toString() {
    return `${this.operand1} ${this.operator} ${this.operand2}`;
  }
  getResult() {
    switch (this.operator) {
      case '+': {
        return this.operand1 + this.operand2;
      }
      case '-': {
        return this.operand1 - this.operand2;
      }
      case '*': {
        return this.operand1 * this.operand2;
      }
      default: {
        throw new Error('Unknown operator');
      }
    }
  }
}
