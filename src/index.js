import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfAttempts = 3;

export default (gameDescription, generateGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  for (let i = 0; i < numberOfAttempts; i += 1) {
    const getAnswerAndQuestion = generateGame();
    const question = car(getAnswerAndQuestion);
    const correctAnswer = cdr(getAnswerAndQuestion);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
