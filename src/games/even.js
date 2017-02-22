// @flow
import { question } from 'readline-sync';
import Numbers from '../data/Numbers';

type N = Numbers;

export const checker = (currentValue: N, userValue: boolean) => currentValue.isEven() === userValue;

export const ask = (quest: string) => question(quest, {
  trueValue: ['yes'],
  falseValue: ['no'],
});
