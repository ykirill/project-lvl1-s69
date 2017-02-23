// @flow
import { getRandNumber, gcd } from '../tools';
import brainGames from '..';

const gameSteps = 3;

const getTask = (a: number, b: number) => ({
  question: `Question: ${a} ${b}`,
  answer: gcd(a, b).toString(),
});

const composeTasks = (length: number) => {
  const iter = (count: number, acc) => {
    if (count === 0) {
      return acc;
    }
    const a = getRandNumber(1, 100);
    const b = getRandNumber(1, 100);
    const newAcc = [...acc, getTask(a, b)];
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
