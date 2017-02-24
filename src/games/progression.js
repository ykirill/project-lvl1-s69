// @flow
import { getRandNumber, getProgression, prepareData } from '../tools';
import brainGames from '..';

const gameSteps = 3;
const progressionLength = 10;

const getTask = (question: string, answer: string) => ({
  question,
  answer,
});

const composeTasks = (length: number) => {
  const iter = (count: number, acc) => {
    if (count === 0) {
      return acc;
    }
    const start = getRandNumber(1, 100);
    const step = getRandNumber(1, 10);
    const progression = getProgression(start, step, progressionLength);
    const data = prepareData(progression);
    const newAcc = [...acc, getTask(...data)];
    return iter(count - 1, newAcc);
  };
  return iter(length, []);
};

const run = () => {
  const rule = 'What number is missing in this progression?';
  const tasks = composeTasks(gameSteps);
  return brainGames(rule, tasks);
};

export default run;
