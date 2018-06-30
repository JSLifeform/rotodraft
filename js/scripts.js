//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
//test code, test standard 4x4 table
  var drafters = 4;
  var rounds = 4;
  //calls in number of drafters and rounds
  //var drafters = checkPositiveInt(prompt('How many drafters?'));
  //var rounds = checkPositiveInt(prompt('How many rounds?'));

// variables to read and edit JQuery DOM elements
  var $inputBox = $('#inputBox');
  var $submitCard = $('#submitCard');
//  window.alert('You have initiated a draft table with '+ drafters + ' and ' + rounds + ' rounds!');
  const tableHeadCreate = document.createElement('th');
  var arrayCounter;
  var tableHead;
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
  for(var i = 0; i < tableArray.length; i++){

    // non working code trying to add to table

   //
   var $cellContent = tableArray[i].textContent;
   console.log($cellContent);
    // if($cellContent.isNaN() === false){
    //   console.log(tableArray[i]);
    //  }
  };
  tableArray[0].textContent = $submitCard.val();
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
