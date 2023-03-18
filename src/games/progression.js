import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const playProgression = () => {
  const step = getRandomNumber(1, 10);
  const resultProgression = [];
  const startNum = getRandomNumber(1, 50);
  for (let i = 1; i <= progressionLength; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  runGames(playProgression, description);
};

export default runProgression;
