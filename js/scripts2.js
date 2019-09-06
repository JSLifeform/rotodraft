  //calls in html body
  var body = document.getElementsByTagName('body');
  const submitCard = document.querySelector('#inputBox');
  const importCardList = document.querySelector('#importButton')
  const table = document.querySelector('#draftTable');
  //array for picked cards
  var selectedCards = [];
  cardList = [];
  // variable to test if card has been picked
  var alreadyPicked = false;
  //variable for rounds and drafters, global so they can be used in all functions
  var drafters = 5;
  var rounds = 8;

function tableCreate(){
// let drafters = checkPositiveInt(prompt('How many drafters?'));
// let rounds = checkPositiveInt(prompt('How many rounds?'));
    //create table head
  for (i = 0; i < drafters; i++) {
      tableHead = document.createElement('th');
      tableHead.textContent = i + 1;
      table.appendChild(tableHead);
  }

   //create table rows
   for (i = 0; i < rounds; i++){
    var tableRow = document.createElement('tr')
    //add table cells to rows
    for (j = 0; j < drafters; j++){
     var tableCell = document.createElement('td');
     tableCell.textContent = i + 1;
     tableRow.appendChild(tableCell);
    }
   //add filled rows to table
   table.appendChild(tableRow);
  }
}

//loops to verify drafters and rounds are positive integers
function checkPositiveInt(x){
  var truthcheck = false;
  var number = parseInt(x);
  do {
    if (Number.isInteger(number) === true){
      if (number > 0 ){
        truthcheck = true;
        // debug number line --window.alert(number);
        return number;
      }
      else{
        number = parseInt(prompt('You did not enter a positive integer, try again!'));
      }
    }
    else {
      number = parseInt(prompt('You did not enter a positive integer, try again!'));
    }
  }while(truthcheck === false);
}

// adds picked card to selectedCards array
function addToPicked(e){
  e.preventDefault();
  //put table cells and input box into variables
  let tableArray = document.querySelectorAll('td');
  let cardInput = submitCard.querySelector('#submitCard');
  if (selectedCards.length >= rounds * drafters) return alert("Draft is complete!")
  selectedCards.forEach((value) => {
    if (value === cardInput.value){ 
      alert('card picked!');
      alreadyPicked = true;
      return;
    }})
  if (!alreadyPicked) {
    selectedCards.push(cardInput.value);
  }
  alreadyPicked = false;
  addToTable(cardInput.value);
}



//function to add text to cells in snake order
function addToTable(card) {
  //used to determine where to place text
  let pickNumber = selectedCards.length;
  console.log(pickNumber)
  //calls in cells for modification
  let cells = table.querySelectorAll('td');
  //round and seat used for calculating card placement on table
  const currentRound = Math.ceil(pickNumber / drafters)
  let seatNumber = (pickNumber % drafters + 1);
  //swaps direction for picks
  if (currentRound % 2 !== 0 ) {
    //displays left to right on odd rounds
    const pickMath = pickNumber - 1
    cells[pickMath].textContent = card;
  } else if (pickNumber % drafters === 0) {
    // displays last card in even rounds, having issues with even round equation
    const pickMath = pickNumber - drafters
    cells[pickMath].textContent = card;
  } else if (currentRound % 2 === 0 ){
    //displays right to left on even rounds
    const pickMath = (currentRound * drafters) - seatNumber + 1
    cells[pickMath].textContent = card;
  }
}

function importCards() {
  var cardFile = new XMLHttpRequest();
  cardFile.open('GET', 'cubecards.txt', false)
  cardFile.onreadystatechange = function () {
    if (cardFile.readyState === 4) {
      if (cardFile.status === 200 || cardFile.status === 0){
        cardList = cardFile.responseText;
        console.log(cardList)
      }
    }
  }
  cardFile.send(null);
  console.log('import!');
}


submitCard.addEventListener('submit', addToPicked);
importCardList.addEventListener('click', importCards)

tableCreate();