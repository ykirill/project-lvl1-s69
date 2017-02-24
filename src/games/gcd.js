// @flow
import { getRandNumber, getGcd, composeTasks } from '../tools';
import brainGames from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getTask = (a: number, b: number) => ({
  question: `Question: ${a} ${b}`,
  answer: getGcd(a, b).toString(),
});

const run = () => {
  const args = [() => getRandNumber(1, 100), () => getRandNumber(1, 100)];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
