//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
  var drafters = checkPositiveInt(prompt('How many drafters?'));
  var rounds = checkPositiveInt(prompt('How many rounds?'));

// variables to read and edit JQuery DOM elements
  var $inputBox = $('#inputBox');
  var $submitCard = $('#submitCard');
//  window.alert('You have initiated a draft table with '+ drafters + ' and ' + rounds + ' rounds!');
  const tableHeadCreate = document.createElement('th');
  var arrayCounter;
  var tableHead;
  var selectedCards = [];
  const table = document.getElementById('draftTable');
  //create table head
  for (i = 0; i < drafters; i++){
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
//}

$($inputBox).on('click', 'button', function(){
  // trigger addTable function on clicking submit
  addTable();
});

//trigger addTable on enter key
$($inputBox).keypress(function(e){
  if(e.which == 13){
    addTable();
  }
});

function addTable(){
  var tableArray = $('td').toArray();
    // test code to show number of cards in array
    console.log(selectedCards.length);
  for (var i = 0; i <= selectedCards.length; i++){
    if ($submitCard.val() === selectedCards[i]){
      // checks for duplicate cards through loop and exits if duplicate
      alert("This card has already been taken!");
      break;
    } else  if(i === selectedCards.length){
      // adds card to end of selectCards if no duplicates in table
      selectedCards.push($submitCard.val());
      console.log(selectedCards);
      console.log('testlog');
      break;
    }
    //  test loop iterations
    else {
      console.log('fail ' + i);
    }
  }

// variables for printing in snake draft order
var oddCounter = true;
var roundCounter = 0;
var seatNumber = 0;
  for (var i = 0; i < selectedCards.length; i++){
    if (oddCounter === true){
      tableArray[roundCounter * drafters + seatNumber].innerText = selectedCards[i];
    } else if (oddCounter === false){
      tableArray[roundCounter * drafters + (drafters - seatNumber - 1)].innerText = selectedCards[i];
    } else {
      console.log('fail print loop '+ i);
    }
    if (seatNumber === drafters - 1){
      roundCounter += 1;
      seatNumber = 0;
      if (oddCounter === true){
        oddCounter = false;
      } else {
        oddCounter = true;
      }
    } else {
      seatNumber +=1;
    }
    console.log('round ' + roundCounter + ' seat ' + seatNumber);
  }
}

//loops to verify drafters and rounds are positive integers
function checkPositiveInt(x){
  var truthcheck = false;
  var number = parseInt(x);
  do {
    if (Number.isInteger(number) === true){
      if (number >= 0 ){
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
