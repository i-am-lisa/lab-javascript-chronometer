class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
}
  startClick(callback){
    this.intervalId = setInterval(() => {
          this.currentTime ++;
          callback();
      }, 1000);
     
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);  
  }

  twoDigitsNumber(number) {
    // if (number < 10){
    //   return `0${number}`;
    // }  
    // else{
    //   return `${number}`;
    // }
    let num = "0" + number;
    return num.slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
  this.currentTime = 0;
  }
  
  splitClick() {
    
    let min = this.getMinutes();
    let sec = this.getSeconds();

    let twoDigitMin = this.twoDigitsNumber(min);
    let twoDigitSec = this.twoDigitsNumber(sec);

  return `${twoDigitMin}:${twoDigitSec}`;  
  }
}

