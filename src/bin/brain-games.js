#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!\n';
console.log(greeting);

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
