import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const getAnswerAndQuestion = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isEven(question);
  return cons(question, correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
