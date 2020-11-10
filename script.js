let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

const getAbsoluteDistance = (guess,target) => {
  return Math.abs(guess-target);
}

const compareGuesses = (humanGuess,computerGuess,targetNumber) => {
  if (humanGuess > 9 || humanGuess < 0) {
  alert('invalid number');
  }
  let distHuman = getAbsoluteDistance(humanGuess,targetNumber);
  let distComputer = getAbsoluteDistance(computerGuess,targetNumber);
  if (distHuman > distComputer) {
    return false;
  } else if (distHuman < distComputer) {
    return true;
  } else if (distHUman === distComputer) {
    return true;
  }
}

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
    humanScore += 1;
    break;
    case 'computer':
    computerScore += 1;
    break;
  }
}
const advanceRound = () => {
  currentRoundNumber += 1;
}


