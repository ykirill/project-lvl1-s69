// @flow
import { getRandNumber, getBalanced } from '../tools';
import brainGames from '..';

const gameSteps = 3;

const getTask = (a: number) => ({
  question: `Question: ${a}`,
  answer: getBalanced(a),
});

const composeTasks = (length: number) => {
  const iter = (count: number, acc) => {
    if (count === 0) {
      return acc;
    }
    const newAcc = [...acc, getTask(getRandNumber(1, 10000))];
    return iter(count - 1, newAcc);
  };
  return iter(length, []);
};

const run = () => {
  const rule = 'Balance the given number.';
  const tasks = composeTasks(gameSteps);
  return brainGames(rule, tasks);
};

export default run;
