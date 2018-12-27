import { welcome, engine } from '..';

export default () => {
  const isEven = number => (number % 2 === 0 ? 'yes' : 'no');
  const gameRules = 'Answer "yes" if number even otherwise answer "no". \n';

  welcome();
  engine(gameRules, isEven);
};
