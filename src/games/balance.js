// @flow
import { getRandNumber, getBalanced, composeTasks } from '../tools';
import brainGames from '..';

const rule = 'Balance the given number.';

const getTask = (a: number) => ({
  question: `Question: ${a}`,
  answer: getBalanced(a),
});

const run = () => {
  const args = [() => getRandNumber(1, 100)];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
