import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getAnswerAndQuestion = () => {
  const startNumber = getRandomInteger(1, 20);
  const step = getRandomInteger(6, 20);
  const dots = getRandomInteger(1, 10);
  let question = '';
  let correctAnswer;
  for (let i = 1, j = startNumber; i <= progressionLength; i += 1, j += step) {
    if (dots === i) {
      question += '.. ';
      correctAnswer = `${j}`;
    } else {
      question += `${j} `;
    }
  }
  return cons(question, correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
