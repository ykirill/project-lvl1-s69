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
  const str = num.toString();
  const sum = str.split('')
    .reduce((acc: number, n: string) => Number(n) + acc, 0);
  const d = Math.floor(sum / str.length);
  const r = sum % str.length;

  const addReminder = (rem: number, arr: Array<number>) => {
    if (rem === 0) {
      return arr.join('');
    }
    const [current, ...rest] = arr;
    return addReminder(rem - 1, [...rest, current + 1]);
  };

  const prepareNumber = (counter: number, acc: Array<number>) => {
    if (counter === 0) {
      return addReminder(r, acc);
    }
    return prepareNumber(counter - 1, [...acc, d]);
  };
  return prepareNumber(str.length, []);
};

export { isEven, getRandNumber, gcd, getBalanced };
