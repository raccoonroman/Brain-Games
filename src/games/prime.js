import getRandomInteger from '../utils';
import { cons } from 'hexlet-pairs';
import engine from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
};

const getAnswerAndQuestion = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => engine(gameDescription, getAnswerAndQuestion);
