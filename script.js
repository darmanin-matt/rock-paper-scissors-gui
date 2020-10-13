      var playerSelection;
      var computerSelection;
      let playerScore = 0,
        computerScore = 0;

        function computerPlay() {
        let computerOptions = ["rock", "paper", "scissors"];
        return computerOptions[
          Math.floor(Math.random() * computerOptions.length)
        ];
      }
      //Generates a random choice from the computer

      function checkScore(){
        scoreboard.innerHTML = `Computer ${computerScore} - ${playerScore} Player`;
        if (playerScore < 5 && computerScore < 5) {
          return;
        } else if (playerScore >=5) {
          alert("Player wins!");
          playerScore = computerScore = 0;
        } else if (computerScore >= 5) {
          alert("Computer wins!");
          playerScore = computerScore = 0;
        }
        scoreboard.innerHTML = `Computer ${computerScore} - ${playerScore} Player`;
      }
      //Updates the scoreboard and checks the score. If anyone achieves a score of 5 or more, they win.

      function playRound(playerInput) {
        playerSelection = playerInput.toLowerCase();
        computerSelection = computerPlay();

        if (playerSelection == "rock" && computerSelection == "rock") {
          alert("You both chose rock! Each player gets a point.");
          playerScore++;
          computerScore++;
          } else if (playerSelection == "paper" && computerSelection == "paper") {
          alert("You both chose paper! Each player gets a point.");
          playerScore++;
          computerScore++;
        } else if (
          playerSelection == "scissors" &&
          computerSelection == "scissors"
        ) {
          alert("You both chose scissors! Each player gets a point.");
          playerScore++;
          computerScore++;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
          alert(
            "You chose paper and the computer chose rock. You win this round!"
          );
          playerScore++;
        } else if (
          playerSelection == "scissors" &&
          computerSelection == "paper"
        ) {
          alert(
            "You chose scissors and the computer chose paper. You win this round!"
          );
          playerScore++;
        } else if (
          playerSelection == "rock" &&
          computerSelection == "scissors"
        ) {
          alert(
            "You chose rock and the computer chose scissors. You win this round!"
          );
          playerScore++;
        } else if (
          playerSelection == "paper" &&
          computerSelection == "scissors"
        ) {
          alert(
            "You chose paper and the computer chose scissors. The computer wins this round!"
          );
          computerScore++;
        } else if (
          playerSelection == "scissors" &&
          computerSelection == "rock"
        ) {
          alert(
            "You chose scissors and the computer chose rock. The computer wins this round!"
          );
          computerScore++;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
          alert(
            "You chose rock and the computer chose paper. The computer wins this round!"
          );
          computerScore++;
        } else {
          alert(
            "The input was invalid. Input only 'rock', 'paper' or 'scissors'."
          );
        }

        checkScore();
      }

      const reset = document.getElementById('reset');
      reset.addEventListener('click', () => {
        playerScore = computerScore = 0;
        scoreboard.innerHTML = `Computer ${computerScore} - ${playerScore} Player`;
      })
      //Reset button to clear the score mid-game.

      const btn = document.querySelectorAll('.option');
      btn.forEach(option => {
        option.addEventListener('click', (e) => playRound(e.srcElement.id));
      });
      //Selecting the option
      
      scoreboard = document.getElementById('scoreboard');
      scoreboard.innerHTML = `Computer ${computerScore} - ${playerScore} Player`;
      //Displaying the scoreboard initially
