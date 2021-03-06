// @flow
import { isEven, getRandNumber, composeTasks } from '../tools';
import brainGames from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const getTask = (number: number) => ({
  question: `Question: ${number}`,
  answer: isEven(number) ? 'yes' : 'no',
});

const run = () => {
  const args = [() => getRandNumber(1, 100)];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
