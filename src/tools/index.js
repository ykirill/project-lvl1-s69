// @flow
const isEven = (number: number) => number % 2 === 0;

const isPrime = (number: number) => {
  console.log(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

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

const getProgression = (start: number, step: number, length: number) => {
  const iter = (acc: Array<number>, current: number) => {
    if (acc.length === length) {
      return acc;
    }
    return iter([...acc, current], current + step);
  };

  return iter([], start);
};

const prepareData = (progression: Array<number>) => {
  const index = getRandNumber(0, progression.length - 1);
  const result = progression.reduce((acc, item, i) =>
    [...acc, i === index ? '..' : item], []);
  return [result.join(', '), progression[index].toString()];
};

export { isEven, isPrime, getRandNumber, gcd, getBalanced, getProgression, prepareData };
