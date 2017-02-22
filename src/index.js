// @flow
import { question } from 'readline-sync';

export default function (startMessage: string,
  logic: void, collection: Array<void>,
  checker: void, ask: void) {
  return () => {
    console.log(`${startMessage}\n`);
    const user = question('May I have your name? ');
    console.log(`Hello, ${user}!\n`);
    return logic(user, collection, checker, ask);
  };
}
