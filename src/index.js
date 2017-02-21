// @flow
import readlineSync from 'readline-sync';

export default (q:string) => readlineSync.question(q);
