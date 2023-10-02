'use strict';
/* console.log(document.querySelector('.message').textContent);
// 72- Selecting and Maniulating Elements
document.querySelector('.message').textContent = 'Correct Number! ';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */
//73 - Handling Click Events
//74 - Implimit the game logic
let score = 20;
let highscore = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log('secretNumber=', secretNumber);
  console.log('highscore=', highscore);
  console.log('score=', score);

  // when there is no imput
  if (!guess) {
    displayMessage('⛔️ No number!');
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤜 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // when guess is too high
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      highscore--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
});
