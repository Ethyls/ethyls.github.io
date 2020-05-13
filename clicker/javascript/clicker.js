let score = 0;
let bonus = 0.1;
let clickValue = 1;

const scoreHTML = document.getElementById('score');
const incrementerButton = document.getElementById('incrementer');
const outputDisplay = document.getElementById('output');
const doubleClickButton = document.getElementById('double-click')

const run = () => {
  setInterval(function(){
    score += bonus;
    scoreHTML.innerHTML = Math.round(score);
  }, 100);
};

const calculateOutput = () => {
  setInterval(function(){
    let currentOutput = bonus * 10;
    outputDisplay.innerHTML = `Current output : ${Math.round(currentOutput)}/s`;
  }, 100);
};

incrementerButton.addEventListener("click", (event) => {
  score += clickValue;
  scoreHTML.innerHTML = Math.round(score);
});

doubleClickButton.addEventListener("click", (event) => {
  if (score >= clickValue * 100) {
    score -= clickValue * 100;
    clickValue = clickValue * 2;
    doubleClickButton.innerHTML = `Double your clicks ! (cost : ${clickValue * 100} points)`;
  }
})

const addWorkerButton = document.getElementById('addworker');

addWorkerButton.addEventListener("click", (event) => {
  if (score >= 100) {
    score -= 100;
    bonus += 0.1
    scoreHTML.innerHTML = Math.round(score);
  }
})
