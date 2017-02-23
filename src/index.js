// @flow
import readLineSync from 'readline-sync';

const f = (name: string, tasks: Array<Object>) => {
  if (tasks.length === 0) {
    return console.log(`Congratulations, ${name}!\n`);
  }
  const [current, ...rest] = tasks;

  console.log(current.question);
  const userAnswer = readLineSync.question('Your answer: ');
  if (userAnswer === current.answer) {
    console.log('Correct!\n');
    return f(name, rest);
  }
  console.log(`Your answer "${userAnswer}" is wrong. The correct answer is "${current.answer}".\n`);
  console.log(`Let's try again, ${name}!\n`);
  return null;
};

export default (rule: ?string, tasks: ?Array<Object>) => {
  const startMsg = rule ? `Welcome to the Brain Games!\n${rule}\n` : 'Welcome to the Brain Games!\n';
  console.log(startMsg);
  const user = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);

  return tasks ? f(user, tasks) : null;
};
