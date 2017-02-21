#!/usr/bin/env node
// @flow
import askUser from '../';
import getNumbers from '../numbers';
import runEvenGame from '../even';

const numbers:Array<number> = getNumbers([], 5);

console.log('Welcome to the Brain Games!\n' +
  'Answer "yes" if number even otherwise answer "no".\n');

// let's ask user's name and greet him
const userName:string = askUser('May I have your name? ');
console.log(`Hello, ${userName}`);

runEvenGame(numbers, userName);
