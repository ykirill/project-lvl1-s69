// @flow
import { question } from 'readline-sync';

export const checker = (currentValue, userValue) => Number(userValue) === currentValue.getResult();

export const ask = quest => question(quest);
