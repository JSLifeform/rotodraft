//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
  //calls in number of drafters and rounds
  var drafters = checkPositiveInt(prompt('How many drafters?'));
  var rounds = checkPositiveInt(prompt('How many rounds?'));
  window.alert('You have initiated a draft table with '+ drafters + ' and ' + rounds + ' rounds!');
  const tableHeadCreate = document.createElement('th');
  var arrayCounter;
  var tableHead;
  const table = document.getElementById('draftTable');
  for (i = 0; i < drafters; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = i + 1;
    table.appendChild(tableHead);
  }



  // var tableHeadEdit = document.getElementsByTagName('th');
  // for (i = 0; i < drafters; i++){
  //   tableHeadEdit[i].contentText = i + 1;
  // }
  // for (var x=0; x <= drafters; x++ ){
  //   tablehead += '<th>'+x+'</th>';
  //   arrayCounter++;
  // }
  //
  // for (var y=0; y <= rounds; y++) {
  //   tablehead.appendChild(document.createElement('p'));
  //   rounds.setAttribute('id', y);
  // }
  //
  //
  //
  //
  // document.write(tablehead);
//}

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
