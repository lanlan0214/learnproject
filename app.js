/*
GAME FUNCTION:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

//Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.querySelector('#guess-input'),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector('.message');


//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

//Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //Validate(驗證)
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if (guess === winningNum) {
    //Game over - won

    // //Disable input 這些是原本使用的code後來用一個function代替了
    // guessInput.disabled = true; //如果答案答對就不能再提交了
    // //Change border color
    // guessInput.style.borderColor = 'green';
    // //Set message
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {

    //Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over - lost

      // //Disable input 這些是原本使用的code後來用一個function(gameover)代替了
      // guessInput.disabled = true; //如果答案答對就不能再提交了
      // //Change border color
      // guessInput.style.borderColor = 'red';
      // //Set message
      // setMessage(`Game over, you lost. The correct number was ${winningNum}`, 'red');

      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
    } else {
      //Game continues - answer wrong

      //Clear input
      guessInput.value = '';
      //Change border color
      guessInput.style.borderColor = 'red';
      //Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
})

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //Disable input
  guessInput.disabled = true; //如果答案答對就不能再提交了
  //Change border color
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  //Set message
  setMessage(msg);

  //Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}