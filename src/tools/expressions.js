// @flow
import Expression from '../data/Expression';

const getRandomNumber = (limit: number) => Math.floor(Math.random() * limit);

const getExpressions = (arr: Array<Expression>, operators: Array<string> = ['+', '-', '*']) => {
  if (operators.length === 0) {
    return arr;
  }
  const [operator, ...rest] = operators;
  const op1 = getRandomNumber(50);
  const op2 = getRandomNumber(50);
  const operands = op1 > op2 ? [op1, op2] : [op2, op1];
  const result = new Expression(operator, ...operands);
  return getExpressions([...arr, result], rest);
};

export default getExpressions;
