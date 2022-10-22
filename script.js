let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);//obtaining the number entered in the textbox
  if (!guess) {
    displayMessage("⛔️ No number!");//pop up if we guessed wrong
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct!");// pop up if we guessed the correct number
    if (score > highscore) {
      highscore = score;// updating highscore if the current score exceeds it
      document.querySelector(".highscore").textContent = highscore;// displaying highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");//pop up displayed depending if our guess is greater or lesser than the actual number
      score--;//subtracting score by 1 on each wrong guess
      document.querySelector(".score").textContent = score;// displaying the score
    } else {
      displayMessage("💥 You lost the game!");//pop-up if our score reaches 0
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  score = 20;// reinitializing values each time we restart the game
  secretNumber = Math.trunc(Math.random() * 20) + 1;//generating a random number between 1 and 20
  

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("#guess").value = "";
});