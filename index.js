let title = document.querySelector("#title");
let subTitle = document.querySelector("#sub-title");
let inputGuess = document.querySelector("#input_guess");
let startGameButton = document.querySelector("#go");

let resetButton = document.querySelector("#reset-button");
let hintButton = document.querySelector("#hint-button");

let firsttrial = document.querySelector("#first_trial");
let secondTrial = document.querySelector("#second_trial");
let thirdTrial = document.querySelector("#third_trial");
let fourthTrial = document.querySelector("#fourth_trial");
let fifthTrial = document.querySelector("#fifth_trial");

let random_number = Math.floor(Math.random() * 100) + 1;
let counter = 6;

function guesslocation() {
  let diff = random_number - parseInt(inputGuess.value);
  if (diff <= 5) {
    title.textContent = "You are hot!";
    // change tp You are hot
  } else if (diff <= 10) {
    title.textContent = "You are getting hotter!";
  } else if (diff <= 25) {
    title.textContent = "You are lukewarm!";
    //change text to you are lukewarm
  } else if (diff < 50) {
    //change text to cold
    title.textContent = "you are cold";
  }
}
function numbersguessed() {
  if (inputGuess.value) {
    if (counter === 5) {
      firsttrial.textContent = inputGuess.value;
    } 
    else if (counter === 4) {
      secondTrial.textContent = inputGuess.value;
    }
    else if (counter === 3) {
        thirdTrial.textContent = inputGuess.value;
      } 
    else if (counter === 2) {
        fourthTrial.textContent = inputGuess.value;
      }
    else if (counter === 1) {
        fifthTrial.textContent = inputGuess.value;
      }
  }
   
}
function guessGame() {
  let input = inputGuess.value;
  input = parseInt(input);
  if (isNaN(input) || input < 1 || input > 100) {
    return title.innerText = "That is an invalid guess.";
  } 
  
  else{
    
    if (input === random_number) {
    title.textContent = `You  Win! The winning number was ${random_number} `;
    counter = 0;
    //returrn winner
  } else {
    numbersguessed();
    guesslocation();
    counter--;
    if (counter == 0) {
      return (title.textContent = `You lose.The winning number was ${random_number}`);
    }
  }
}}
  

  


function resetGame(){
    title.textContent = "The Guessing Game";
 subTitle.textContent = "Guess a number between 1-100";
 inputGuess.textContent = '';

 firsttrial.textContent = "5";
 secondTrial.textContent ="4";
 thirdTrial.textContent = "3";
 fourthTrial.textContent = "2";
 fifthTrial.textContent = "1";

 random_number = Math.floor(Math.random() * 100) + 1;
 counter = 6;


}

startGameButton.addEventListener("click", guessGame);

resetButton.addEventListener("click",resetGame)