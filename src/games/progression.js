import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionStart = 1;
const progressionLength = 10;

const getAnswerAndQuestion = () => {
  const startNumber = getRandomInteger(1, 20);
  const step = getRandomInteger(6, 20);
  const hiddenElementPosition = getRandomInteger(progressionStart, progressionLength);
  let questionWithFirstSpace = '';
  for (let i = progressionStart; i <= progressionLength; i += 1) {
    if (hiddenElementPosition === i) {
      questionWithFirstSpace += ' ..';
    } else {
      questionWithFirstSpace += ` ${startNumber + step * i}`;
    }
  }
  const question = questionWithFirstSpace.slice(1);
  const correctAnswer = `${startNumber + step * hiddenElementPosition}`;
  return cons(question, correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
