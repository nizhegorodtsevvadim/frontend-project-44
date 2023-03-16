import runGames, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEven = () => {
  const question = getRandomNumber(1, 100);
  const corretAnswer = isEven(question) ? 'yes' : 'no';
  return [question, corretAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = playEven();
  }
  return runGames(rounds, description);
};

export default runEvenGame;
