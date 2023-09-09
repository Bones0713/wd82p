const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const yourScore = document.getElementById("you-span");
const drawScore = document.getElementById("draw-span");
const computerScore = document.getElementById("computer-span");

const yourSelected = document.getElementById("select-your-weapon");
const computerSelected = document.getElementById("select-computer-weapon");
const drawSelected = document.getElementById("select-draw-weapon");

let userResult = 0;
let computerResult = 0;
let drawResult = 0;

function gamePhase(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return "Draw";
  } else if (
    (playerWeapon === "✊🏼" && computerWeapon === "✌🏼") ||
    (playerWeapon === "✋🏼" && computerWeapon === "✊🏼") ||
    (playerWeapon === "✌🏼" && computerWeapon === "✋🏼")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

function getComputerWeapon() {
  const weapons = ["✊🏼", "✋🏼", "✌🏼"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

function inGame(playerWeapon) {
  const computerChoose = getComputerWeapon();
  const playerChoose = playerWeapon;

  yourSelected.textContent = playerChoose;
  computerSelected.textContent = computerChoose;

  const result = gamePhase(playerChoose, computerChoose);

  if (result === "You Win") {
    userResult++;
    yourScore.textContent = userResult;
  } else if (result === "You Lose") {
    computerResult++;
    computerScore.textContent = computerResult;
  } else {
    drawResult++;
    drawScore.textContent = drawResult;
  }
}

rockBtn.addEventListener("click", () => inGame(rockBtn.textContent));
paperBtn.addEventListener("click", () => inGame(paperBtn.textContent));
scissorsBtn.addEventListener("click", () => inGame(scissorsBtn.textContent));
