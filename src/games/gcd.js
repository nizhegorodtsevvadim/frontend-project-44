import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const playGcd = () => {
  const first = getRandomNumber(1, 50);
  const second = getRandomNumber(1, 50);
  const question = `${first} ${second}`;
  const correctAnswer = String(getGcd(first, second));
  return [question, correctAnswer];
};

const runGcd = () => {
  runGames(playGcd, description);
};

export default runGcd;
