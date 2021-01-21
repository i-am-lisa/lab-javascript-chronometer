const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printTime() {
 twoDigitsNumber.forEach(number => {
   
});

};

function printMinutes() {
  minDec.innerHTML = chronometer.getMinutes();
  console.log(minDec.innerHTML)
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  btnLeft.classList.toggle("stop");

  if (btnLeft.innerText == "START"){
  btnLeft.innerText = "STOP";
  chronometer.startClick();
  
  }
  else{
    btnLeft.innerText = "START";
    chronometer.stopClick();
  }

  

  console.log("Start/Stop")
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle("split");

  if (btnRight.innerText == "RESET"){
    btnRight.innerText = "SPLIT";
  }
  else{
    btnRight.innerText = "RESET";
  }


  console.log("Reset/Split")
});
