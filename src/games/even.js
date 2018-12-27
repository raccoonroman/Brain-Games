import { engine, getRandomInteger } from '..';
import { cons } from 'hexlet-pairs';

const gameRules = 'Answer "yes" if number even otherwise answer "no". \n';

const getAnswerAndQuestion = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => engine(gameRules, getAnswerAndQuestion);
