import readlineSync from 'readline-sync';

const numberOfAttempts = 3;
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const engine = (gameRules, generateCorrectAnswer) => {
  console.log(gameRules);
  const userName = greeting();

  for (let i = 0; i < numberOfAttempts; i += 1) {
    const question = getRandomInteger(0, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = generateCorrectAnswer(question);

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
