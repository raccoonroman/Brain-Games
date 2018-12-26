import readlineSync from 'readline-sync';


export const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};


export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};


export const isEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const userName = greeting();
  const attemptAmt = 3;

  for (let i = 0; i < attemptAmt; i += 1) {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const currectAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (currectAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${currectAnswer}" \nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};
