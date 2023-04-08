{const playGame = function(playerInput){
  clearMessages();

  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + argComputerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);


  const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  console.log ('ruch komputera:' + argComputerMove, 'ruch gracza:' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
      } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      printMessage('Nieznany ruch gracza!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      printMessage('Nieznany ruch gracza!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Nieznany ruch gracza!')
      }
  }


  console.log ('wynik funkcji:' + displayResult);
  displayResult(argComputerMove, argPlayerMove);
}

const rockClicked = function(){
  playGame(1);
}

const playRock = document.getElementById('play-rock');

playRock.addEventListener('click', rockClicked);

const paperClicked = function(){
  playGame(2);
}

const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', paperClicked);

const scissorsClicked =function(){
  playGame(3);
}

const playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', scissorsClicked);
}