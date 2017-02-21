// @flow
const getNumbers = (arr: Array<number>, num: number) => {
  if (arr.length === num) {
    return arr;
  }
  return getNumbers([...arr, Math.floor(Math.random() * 100)], num);
};

export default getNumbers;
