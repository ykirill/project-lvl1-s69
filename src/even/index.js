// @flow
import askUser from '../';

const CORRECT = 'correct';
const WRONG = 'wrong';

const evenGame = (numbers: Array<number>, name: string, flag: string = 'correct') => {
  if (numbers.length === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const [current, ...rest] = numbers;
  const isEven = current % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${current}\nYour answer: `;

  switch (flag) {
    case CORRECT: {
      const userAnswer = askUser(question);
      if (userAnswer !== isEven) {
        evenGame(rest, name, 'wrong');
        return;
      }
      console.log('Correct!\n');
      evenGame(rest, name);
      return;
    }
    case WRONG: {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    default: {
      console.log(`Congratulations, ${name}! You got a default case. Please push CTRL + C`);
    }
  }
};

export default evenGame;
