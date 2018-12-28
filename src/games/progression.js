import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionStart = 0;
const progressionLength = 9;

const getAnswerAndQuestion = () => {
  const startNumber = getRandomInteger(1, 20);
  const step = getRandomInteger(6, 20);
  const hiddenElementPosition = getRandomInteger(progressionStart, progressionLength);
  let question = '';
  let correctAnswer = '';
  for (let i = progressionStart; i <= progressionLength; i += 1) {
    if (hiddenElementPosition === i) {
      question += '.. ';
      correctAnswer = `${startNumber + step * i}`;
    } else {
      question += `${startNumber + step * i} `;
    }
  }
  return cons(question, correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
