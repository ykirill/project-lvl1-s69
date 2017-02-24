// @flow
import { isPrime, getRandNumber, composeTasks } from '../tools';
import brainGames from '..';

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const getTask = (number: number) => ({
  question: `Question: ${number}`,
  answer: isPrime(number) ? 'yes' : 'no',
});

const run = () => {
  const args = [() => getRandNumber(1, 100)];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
