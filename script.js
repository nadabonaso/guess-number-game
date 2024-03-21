'use strict';

// Coding Challenge #1
/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/

// Set the secret secretNumber once per session
// take off decimals 0-19 - then +1 so its between 0 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Again Button click events
document.querySelector('.again').addEventListener('click', function () {
  // restore inital values of score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore message, score, number and guess input fields
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Restore background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Check Button click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🚫 Enter a number!');
    //document.querySelector('.message').textContent = '🚫 Enter a number!';

    //When player wins
    //change the background color if correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎇 Correct number!');
    //document.querySelector('.message').textContent = '🎇 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Set the highscore logic
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // REFACTORED CODE FROM BELOW
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      //   document.querySelector('.message').textContent = '😭 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //     //When guess too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬆️ Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When guess too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬇️ Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
