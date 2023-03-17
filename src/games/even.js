import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEven = () => {
  const question = getRandomNumber(1, 100);
  const corretAnswer = isEven(question) ? 'yes' : 'no';
  return [question, corretAnswer];
};

const runEven = () => {
  runGames(playEven, description);
};

export default runEven;
