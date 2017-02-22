// @flow

export default class {
  num: number;
  constructor(num: number) {
    this.num = num;
  }
  toString() {
    return `${this.num}`;
  }
  getResult() {
    return this.num;
  }
  isEven() {
    return this.num % 2 === 0;
  }
}
