import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getAnswerAndQuestion = () => {
  const firstNumber = getRandomInteger(1, 20);
  const step = getRandomInteger(6, 20);
  const hiddenElementPosition = getRandomInteger(0, progressionLength - 1);
  let question = '';
  const correctAnswer = `${firstNumber + step * hiddenElementPosition}`;
  for (let i = 0; i < progressionLength; i += 1) {
    if (hiddenElementPosition === i) {
      question += '.. ';
    } else {
      question += `${firstNumber + step * i} `;
    }
  }
  return cons(question.trim(), correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
