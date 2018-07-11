//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
//test code, test standard 4x4 table
  // var drafters = 4;
  // var rounds = 4;
  //calls in number of drafters and rounds
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
  // alert($submitCard.val());
  var tableArray = $('td').toArray();
    // non working code trying to add to table
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
// attempt to print in snake draft order
// prints each card in loop
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
// // uses loop to print individual rows
//     for (var j = 0; j < drafters; j++){
// // if loop to switch printing direction of each row
//       if (oddCounter === true) {
//         tableArray[(roundCounter * drafters) + j].innerText = selectedCards[i];
//         oddCounter = false;
//         roundCounter += 1;
//       } else if (oddCounter === false){
//         tableArray[((roundCounter * drafters) +1)  - j].innerText = selectedCards[i];
//         oddCounter = true;
//         roundCounter +=1;
//       }
//     }
  }


   // ********try to cut this for selectedCards
  //for(var i = 0; i < tableArray.length; i++){
  //  var $cellContent = parseInt(tableArray[i].innerText);
  //  if (Number.isInteger($cellContent) === true){
  //   tableArray[i].innerText = $submitCard.val();
  //   selectedCards
  //   //console.log(tableArray[0].innerText);
  //   break;
  //
  //   // test code, what to do if not reading $cellContent as integer
  // } else {
  //   console.log(tableArray[i].innerText);
  // }
  //***************


   // console.log($cellContent);
    // if($cellContent.isNaN() === false){
    //   console.log(tableArray[i]);
    //  }
  // };

});





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
