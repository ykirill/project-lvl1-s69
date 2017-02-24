// @flow
import { getRandNumber, composeTasks } from '../tools';
import brainGames from '..';

const operators = ['+', '-', '*'];

const getTask = (operator: number, a: number, b: number) => {
  const result = { question: `Question: ${a} ${operators[operator]} ${b}`, answer: '' };
  switch (operators[operator]) {
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

const run = () => {
  const rule = 'What is the result of the expression?';
  const args = [
    () => getRandNumber(1, operators.length - 1),
    () => getRandNumber(1, 100),
    () => getRandNumber(1, 100),
  ];
  const tasks = composeTasks(getTask, args);
  return brainGames(rule, tasks);
};

export default run;
