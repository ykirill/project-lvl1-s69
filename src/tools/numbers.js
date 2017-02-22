// @flow
import Numbers from '../data/Numbers';

const getNumbers = (arr: Array<Numbers>, num: number) => {
  if (arr.length === num) {
    return arr;
  }
  const result = new Numbers(Math.floor(Math.random() * 100));
  return getNumbers([...arr, result], num);
};

export default getNumbers;
