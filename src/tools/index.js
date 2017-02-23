// @flow
const isEven = (number: number) => number % 2 === 0;

const getRandNumber = (start: number, end: number) =>
  start + Math.floor(Math.random() * ((end - start) + 1));

export { isEven, getRandNumber };
