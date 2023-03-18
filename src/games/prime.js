import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const number = getRandomNumber(1, 50);
  const question = number;
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const runPrime = () => {
  runGames(playPrime, description);
};

export default runPrime;
