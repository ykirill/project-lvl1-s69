// @flow
const isEven = (number: number) => number % 2 === 0;

const getRandNumber = (start: number, end: number) =>
  start + Math.floor(Math.random() * ((end - start) + 1));

const gcd = (a: number, b: number) => {
  const max = Math.max(Math.abs(a), Math.abs(b));
  const min = Math.min(Math.abs(a), Math.abs(b));

  return max % min === 0 ? min : gcd(max % min, min);
};

export { isEven, getRandNumber, gcd };
