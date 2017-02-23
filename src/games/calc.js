// @flow
import { getRandNumber } from '../tools';
import brainGames from '..';

const gameSteps = 3;

const getTask = (operator: string, a: number, b: number) => {
  const result = { question: `Question: ${a} ${operator} ${b}`, answer: '' };
  switch (operator) {
    case '+': {
      result.answer = (a + b).toString();
      break;
    }
    case '-': {
      result.answer = (a - b).toString();
      break;
    }
    case '*': {
      result.answer = (a * b).toString();
      break;
    }
    default: {
      throw new Error(`No such operator: ${operator}`);
    }
  }
  return result;
};

const expressions = [
  (a: number, b: number) => getTask('+', a, b),
  (a: number, b: number) => getTask('-', a, b),
  (a: number, b: number) => getTask('*', a, b),
];

const composeTasks = (length: number) => {
  const iter = (count: number, acc) => {
    if (count === 0) {
      return acc;
    }
    const a = getRandNumber(1, 100);
    const b = getRandNumber(1, 100);
    const exp = getRandNumber(0, expressions.length - 1);
    const newAcc = [...acc, expressions[exp](a, b)];
    return iter(count - 1, newAcc);
  };
  return iter(length, []);
};

const run = () => {
  const rule = 'What is the result of the expression?';
  const tasks = composeTasks(gameSteps);
  return brainGames(rule, tasks);
};

export default run;
