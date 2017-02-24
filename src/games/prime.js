// @flow
import { isPrime, getRandNumber } from '../tools';
import brainGames from '..';

const gameSteps = 3;

const getTask = (number: number) => ({
  question: `Question: ${number}`,
  answer: isPrime(number) ? 'yes' : 'no',
});

const composeTasks = (length: number) => {
  const iter = (count: number, acc) => {
    if (count === 0) {
      return acc;
    }
    return iter(count - 1, [...acc, getTask(getRandNumber(1, 100))]);
  };
  return iter(length, []);
};

const run = () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  const tasks = composeTasks(gameSteps);
  return brainGames(rule, tasks);
};

export default run;
