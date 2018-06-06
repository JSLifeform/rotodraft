//function tableCreate(){
  //calls in html body
  var body = document.getElementsByTagName('body');
  //calls in number of drafters and rounds
  var drafters = checkPositiveInt(prompt('How many drafters?'));
  var rounds = checkPositiveInt(prompt('How many rounds?'));
  window.alert('You have initiated a draft table with '+ drafters + ' and ' + rounds + ' rounds!');
  var tablehead = "<table style='width: 100%'";
  for (var x=0; x <= drafters; x++ ){
    tablehead += '<th>'+x+'</th>'
  }
  document.write(tablehead);
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
