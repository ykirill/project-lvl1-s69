// @flow
import { question } from 'readline-sync';

export const checker = (currentValue, userValue) => currentValue.isEven() === userValue;

export const ask = quest => question(quest, {
  trueValue: ['yes'],
  falseValue: ['no'],
});
