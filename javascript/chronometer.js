class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalID = null;
  }

  start(callback) {
    console.log("⏳ start() was called!");
    this.intervalID = setInterval(() => {
      this.currentTime++;  // Incrementa el tiempo 1 segundo
      if (callback) {
        callback(); 
      }
      console.log(`🔢 currentTime: ${this.currentTime}`);
    }, 1000);
  }
  


  getMinutes() {
    console.log("⏳ getminutes() was called!"); // DEBUG

    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    console.log("⏳ getseconds() was called!"); // DEBUG
    return this.currentTime%60; 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    console.log("⏳ twodigit() was called!"); // DEBUG
    return ('0' + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    this.currentTime = 0;
    clearInterval(this.intervalID)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    document.querySelector("#sphere > span").innerHTML = "0";
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getMinutes();

    return `${this.minutes}minutes and ${this.seconds} seconds.`
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


