// @flow

const CORRECT = 'correct';
const WRONG = 'wrong';

const askQuestion = item => console.log(`Question: ${item}`);

export default function loop(user: string, collection: Array<void>, checker: void, ask: void) {
  const looseMessage = `Let's try again, ${user}!`;
  const iter = (coll, state: string) => {
    if (coll.length === 0) {
      if (state === 'correct') {
        return console.log(`Congratulations, ${user}!\n`);
      }
      return console.log(looseMessage);
    }
    const [current, ...rest] = coll;
    switch (state) {
      case CORRECT: {
        askQuestion(current.toString());
        const userAnswer = ask('Your answer: ');
        if (checker(current, userAnswer)) {
          console.log('Correct!\n');
          return iter(rest, CORRECT);
        }
        return iter(rest, WRONG);
      }
      case WRONG: {
        return console.log(looseMessage);
      }
      default: {
        break;
      }
    }
    return looseMessage;
  };

  return iter(collection, CORRECT);
}
