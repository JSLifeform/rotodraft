//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
  //calls in number of drafters and rounds
  var drafters = checkPositiveInt(prompt('How many drafters?'));
  var rounds = checkPositiveInt(prompt('How many rounds?'));
  var $inputBox = $('#inputBox');
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
  alert($inputBox.text());
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
