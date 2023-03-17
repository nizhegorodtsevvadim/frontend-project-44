import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Error');
  }
};

const playCalculate = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const symbol = ['+', '-', '*'];
  const operator = symbol[getRandomNumber(0, symbol.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const corretAnswer = calculate(first, second, operator).toString();
  return [question, corretAnswer];
};

const runCalculate = () => {
  runGames(playCalculate, description);
};

export default runCalculate;
