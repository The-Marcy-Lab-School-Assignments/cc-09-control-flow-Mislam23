//1
function betweenFiveAndTen(x){
  if (x >= 5 && x <= 10) {
      return true;
  } else {
      return false;
  }
}

//2
function betweenTenAndThirty(x){
  if (x >= 10 && x <= 30) {
      return true;
  } else {
      return false;
  }
}

//3
function betweenThirtyAndFifty(x){
  if (x >= 30 && x <= 50) {
      return true;
  } else {
      return false;
  }
}

//4
function betweenThirtyFiftySeventy(x){
  if (x >= 0 && x <= 30 || x >= 50 && x <= 70) {
      return true;
  } else {
      return false;
  }
}

//5
function betweenTwentyFiftySixty(x){
  if ((x > -1 && x < 21) || (x > 49 && x < 61)) {
      return true;
  } else {
      return false;
  }
}

//6
function betweenTenTwentyThirty(x){
  if ((x >= 0 && x <= 10) || (x >= 20 && x <= 30)) {
      return true;
  } else {
      return false;
  }
}


//calling functions:
//console.log(betweenFiveAndTen(15));
//console.log(betweenTenAndThirty(10));
//console.log(betweenThirtyAndFifty(30));
//console.log(betweenThirtyFiftySeventy(44));
//console.log(betweenTwentyFiftySixty(55));
//console.log(betweenTenTwentyThirty(22));