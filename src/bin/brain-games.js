#!/usr/bin/env node
// @flow
import askUser from '../';

console.log('Welcome to the Brain Games!\n');

// let's ask user's name and greet him
const userName:string = askUser('May I have your name? ');
console.log(`Hello, ${userName}`);
