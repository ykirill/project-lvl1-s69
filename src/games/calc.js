// @flow
import { question } from 'readline-sync';
import Expression from '../data/Expression';

type E = Expression;
export const checker = (currentValue: E, userValue: string) =>
  Number(userValue) === currentValue.getResult();

export const ask = (quest: string) => question(quest);
