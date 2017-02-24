// @flow
import { getRandNumber, getProgression, prepareData, composeTasks } from '../tools';
import brainGames from '..';

const rule = 'What number is missing in this progression?';
const progressionLength = 10;

const getTask = (...args) => {
  const f = (question: string, answer: string) => ({
    question,
    answer,
  });
  return f(...prepareData(getProgression(...args)));
};

const run = () => {
  const args = [
    () => getRandNumber(1, 100),
    () => getRandNumber(1, 10),
    () => progressionLength,
  ];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
