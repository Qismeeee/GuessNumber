'use strict';

let score = 10;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#4cd137';
    // setTimeout(() => {
    //   document.location.reload();
    // }, 5000);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When player loses
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '👇 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '👇 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😆 You lost the game!';
      displayMessage('😆 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Restore init score and secret number
  // document.querySelector('.message').textContent = 'Start guessing...'; // Restore init message
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score; // Restore init score
  document.querySelector('.number').textContent = '?'; // Restore init number
  document.querySelector('.guess').value = ''; // Restore init guess
  document.querySelector('body').style.backgroundColor = '#222'; // Restore init background color)
  document.querySelector('.number').style.width = '15rem';
});
