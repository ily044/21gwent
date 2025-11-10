let correct = false;
let playerName;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerCard, compCard;

do {
  playerName = prompt("Назви себе, мандрівнику:", "Геральт");
  if (playerName && playerName !== "") correct = true;
} while (!correct);

const text = document.getElementById("text");
const score = document.getElementById("score");
const button = document.getElementById("button");
const user = document.getElementById("user");
const comp = document.getElementById("comp");

text.innerHTML = `Гра починається, ${playerName}...<br>Доля не терпить вагань.`;
score.innerHTML = "Раунд 0 з 3<br>Рахунок: 0 – 0<br>";

button.onclick = () => playRound();

function playRound() {
  user.classList.remove("anim");
  comp.classList.remove("anim");

  if (round === 3) {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    text.innerHTML = `Нова партія, ${playerName}.<br>Покажи свою силу.`;
  }

  setTimeout(() => {
    user.classList.add("anim");
    comp.classList.add("anim");
  }, 10);

  const cards = ["six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
  const values = [6, 7, 8, 9, 10, 2, 3, 4, 11];

  const userIndex = Math.floor(Math.random() * cards.length);
  const compIndex = Math.floor(Math.random() * cards.length);

  user.style.backgroundImage = `url('photo/${cards[userIndex]}.jpg')`;
  comp.style.backgroundImage = `url('photo/${cards[compIndex]}.jpg')`;

  playerCard = values[userIndex];
  compCard = values[compIndex];

  if (playerCard > compCard) {
    playerScore += playerCard;
    text.innerHTML = `${playerName}, твоя карта сильніша!<br>Геральт усміхається.`;
    user.style.backgroundColor = "rgba(0, 100, 0, 0.5)";
    comp.style.backgroundColor = "rgba(120, 0, 0, 0.6)";
  } else if (playerCard < compCard) {
    computerScore += compCard;
    text.innerHTML = `Доля вирішила інакше...<br>`;
    user.style.backgroundColor = "rgba(120, 0, 0, 0.6)";
    comp.style.backgroundColor = "rgba(0, 100, 0, 0.5)";
  } else {
    text.innerHTML = "Карти рівні силою...<br>Ніхто не отримує переваги.";
    user.style.backgroundColor = "rgba(255, 215, 128, 0.5)";
    comp.style.backgroundColor = "rgba(255, 215, 128, 0.5)";
  }

  round++;
  score.innerHTML = `Раунд ${round} з 3<br>Рахунок: ${playerScore} – ${computerScore}<br>`;

  if (round === 3) {
    if (playerScore > computerScore) {
      text.innerHTML = `Перемога за тобою, ${playerName}!<br>Геральт схвально киває.`;
    } else if (playerScore < computerScore) {
      text.innerHTML = `Поразка...<br>Геральт мовчки дивиться у вогонь.`;
    } else {
      text.innerHTML = "Нічия!<br>Карти мовчать...";
    }
  }
}