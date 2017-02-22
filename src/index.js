// @flow
import { question } from 'readline-sync';

export default function (startMessage: string,
  logic: Function, collection: ?Array<any>,
  checker: ?Function, ask: ?Function) {
  return () => {
    console.log(`${startMessage}\n`);
    const user = question('May I have your name? ');
    console.log(`Hello, ${user}!\n`);
    return logic(user, collection, checker, ask);
  };
}
