// @flow
const isEven = (number: number) => number % 2 === 0;

const getRandNumber = (start: number, end: number) =>
  start + Math.floor(Math.random() * ((end - start) + 1));

const gcd = (a: number, b: number) => {
  const max = Math.max(Math.abs(a), Math.abs(b));
  const min = Math.min(Math.abs(a), Math.abs(b));

  return max % min === 0 ? min : gcd(max % min, min);
};

const getBalanced = (num: number) => {
  const numLength = num.toString().length;
  const sum = num.toString().split('')
    .reduce((acc: number, n: string) => Number(n) + acc, 0);
  const average = Math.floor(sum / numLength);
  const reminder = sum % numLength;

  const doBalance = (rem: number, arr: Array<number>) => {
    if (rem === 0) {
      return arr.join('');
    }
    const [current, ...rest] = arr;
    return doBalance(rem - 1, [...rest, current + 1]);
  };

  const composeNewNumber = (counter: number, acc: Array<number>) => {
    if (counter === 0) {
      return doBalance(reminder, acc);
    }
    return composeNewNumber(counter - 1, [...acc, average]);
  };
  return composeNewNumber(numLength, []);
};

export { isEven, getRandNumber, gcd, getBalanced };
