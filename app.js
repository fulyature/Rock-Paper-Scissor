//*-------Selectors-Elementler-----
const selectionDiv = document.querySelector(".selection");

//?secılen elemanların tasıyıcıları

const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//?mesaaj
const messagePar = document.querySelector(".message");

//?score card a erişim

const scoreCard = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");

//?model
const modalCardSection = document.querySelector(".modal-card");
const finalMessagePar = document.getElementById("final-message");

const playAgainBtn = document.querySelector("#play-again");

//*--------Variables---------
let userSelectimage = document.createElement("img");
let pcSelectImg = document.createElement("img");

let pcRandom;

//?colors
const yellow = "#ffc538";
const red = "#fb778b";
const green = "#5ab7ac";

//*--------Event Listeners---------
selectionDiv.addEventListener("click", (e) => {
  console.log(
    e.target.id === "paper" ||
      e.target.id === "rock" ||
      e.target.id === "scissor"
  );
  if (e.target.id) {
    userSelectimage.src = `./images/${e.target.id}.png`;
    userSelectimage.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectimage);
    createPcSelection();
  }
});

playAgainBtn.addEventListener("click", () => {
  modalCardSection.classList.toggle("show");
  window.location.reload();
});

//*---------Function-----

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // pcRandom = "rock";
  pcSelectImg.src = `./images/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  // console.log(userSelectimage.alt);
  // console.log(pcSelectImg.alt);

  //?Eşitlik durumu
  if (userSelectimage.alt === pcRandom) {
    draw();
  } else {
    if (userSelectimage.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectimage.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectimage.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }

  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};
const draw = () => {
  messagePar.textContent = "its a draw";
  scoreCard.style.color = yellow;
  messagePar.style.backgroundColor = yellow;
};
const youLost = () => {
  messagePar.textContent = "you lost";
  scoreCard.style.color = red;
  messagePar.style.backgroundColor = red;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "you win";
  scoreCard.style.color = green;
  messagePar.style.backgroundColor = green;
  yourScoreSpan.textContent++;
};

//?modalın açılması
const openModal = () => {
  modalCardSection.classList.add("show");
  if (yourScoreSpan.textContent === "10") {
    finalMessagePar.textContent = "💃 You Win 🕺";
    document.querySelector(".modal").style.backgroundColor = green;
    playAgainBtn.style.color = green;
  } else {
    finalMessagePar.textContent = "☹️ You Lost ☹️ ";
    document.querySelector(".modal").style.backgroundColor = red;
    playAgainBtn.style.color = red;
  }
};
