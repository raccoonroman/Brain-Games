import { engine, getRandomInteger } from '..';
import { cons } from 'hexlet-pairs';

const gameRules = 'Find the greatest common divisor of given numbers. \n';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getAnswerAndQuestion = () => {
  const number1 = getRandomInteger(0, 100);
  const number2 = getRandomInteger(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return cons(question, correctAnswer);
};

export default () => engine(gameRules, getAnswerAndQuestion);
