/*-----------------ECRAN1----------------*/

let startBtn = document.getElementById("start-btn");
let homePage = document.getElementById("home-page");
let game = document.getElementById("game");
let id
let inGame = false;
startBtn.addEventListener("click", startGame, false);

function startGame() {
  homePage.style.display = "none"
  game.style.display = "flex"
  id = setInterval(frame, 50);
  inGame = true;
}

/*----------------ECRAN2-----------------*/

let letter = document.getElementById("randomLetter")
let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let currentLetter = alphabetArray[randomLetter(26)];
let status = true

function randomLetter(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let score = document.getElementById("score")
let scoreNul = 0;
letter.textContent = currentLetter;
let emptyHeart = document.getElementsByClassName("heartEmpty");
let fullHeart = document.getElementsByClassName("heartFull");
let lives = 3;

document.addEventListener("keydown", function(e) {
  if (inGame) {
    if (e.key === currentLetter && status === true) {
      scoreNul++
      score.textContent = "Score :" + scoreNul;
      currentLetter = alphabetArray[randomLetter(26)];
      letter.textContent = currentLetter
      width = 100
    } else if (lives > 1) {
      lives--
      fullHeart[lives].style.display = "none"
      emptyHeart[lives].style.display = "inline"
    } else {
      status = false
      lives--
      fullHeart[lives].style.display = "none"
      emptyHeart[lives].style.display = "inline"
      letter.textContent = "Game Over"
    }
    if (scoreNul == 10) {
      /*baseTime = 4
      time.textContent = baseTime*/
      clearInterval(id);
      setInterval(frame, 40);
    } else if (scoreNul == 20) {
      /*baseTime = 3
      time.textContent = baseTime*/
      clearInterval(id);
      setInterval(frame, 30);
    } else if (scoreNul == 40) {
      /*baseTime = 2
      time.textContent = baseTime*/
      clearInterval(id);
      setInterval(frame, 20);
    } else if (scoreNul == 80) {
      /*baseTime = 1
      time.textContent = baseTime*/
      clearInterval(id);
      setInterval(frame, 10);
    }
  }
}, false);


/*let intervalId = window.setInterval(decrementing, 1000);
let baseTime = 5;
let time = document.getElementById("time");

function decrementing() {
  baseTime--
  time.textContent = baseTime
  if (baseTime === 0) {
    clearInterval(intervalId)
    letter.textContent = "Game Over"
  }
};*/
/*-----Fonction du temps en chiffre------*/

let width = 100;
let elem = document.getElementById("myBar");

function frame() {
  if (width <= 1) {
    letter.textContent = "Game Over"
    status = false
  } else {
    width--;
    elem.style.width = width + '%';
  }
}
