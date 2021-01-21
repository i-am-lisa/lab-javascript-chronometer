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
    if (number < 10){
      return `0${number}`;
    }  
    else{
      return `${number}`;
    }
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

    min = this.twoDigitsNumber(min);
    sec = this.twoDigitsNumber(sec);

  return `${min}:${sec}`;  
  }
}

