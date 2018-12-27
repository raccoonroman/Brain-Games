import { engine, getRandomInteger } from '..';
import { cons } from 'hexlet-pairs';

const gameRules = 'What is the result of the expression? \n';
const operators = '+-*';

const getAnswerAndQuestion = () => {
  const operator = operators.charAt(getRandomInteger(0, operators.length - 1));
  const leftOperand = getRandomInteger(0, 100);
  const rightOperand = getRandomInteger(0, 100);
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = `${leftOperand + rightOperand}`;
  } else if (operator === '-') {
    correctAnswer = `${leftOperand - rightOperand}`;
  } else if (operator === '*') {
    correctAnswer = `${leftOperand * rightOperand}`;
  }
  return cons(question, correctAnswer);
};

export default () => engine(gameRules, getAnswerAndQuestion);
