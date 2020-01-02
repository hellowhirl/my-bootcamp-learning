// constructor function
function Stopwatch() {
  // let startTime = 0;
  // let stopTime = 0;
  // let totalTime = 0;
  // let startClock = false;
  // this.start = function() {
  //   if (startClock) throw new Error("Stopwatch has already started!");
  //   startClock = true;
  //   startTime = new Date().getTime();
  //   startTime = (startTime % (1000 * 60)) / 1000;
  // };
  // this.stop = function() {
  //   if (!startClock) throw new Error("Stopwatch is not started!");
  //   startClock = false;
  //   stopTime = new Date().getTime();
  //   stopTime = (stopTime % (1000 * 60)) / 1000;
  //   totalTime += stopTime - startTime;
  //   startTime = 0;
  //   stopTime = 0;
  // };
  Object.defineProperty(this, "duration", {
    get: function() {
      return this.totalTime;
    }
  });
  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    }
  });
  // Object.defineProperty(this, "stopTime", {
  //   get: function() {
  //     return stopTime;
  //   }
  // });
  // Object.defineProperty(this, "startClock", {
  //   get: function() {
  //     return startClock;
  //   }
  // });
  // this.reset = function() {
  //   totalTime = 0;
  // };
}

// The point of this exercise:
// Putting all the methods on the prototype was a bad idea to start with, so
// PREMATURE OPTIMIZATION IS THE ROOT OF ALL EVIL

Stopwatch.prototype.startTime = 0;
Stopwatch.prototype.stopTime = 0;
Stopwatch.prototype.totalTime = 0;
Stopwatch.prototype.startClock = false;

Stopwatch.prototype.start = function() {
  if (this.startClock) throw new Error("Stopwatch has already started!");
  this.startClock = true;
  this.startTime = new Date().getTime();
  this.startTime = (this.startTime % (1000 * 60)) / 1000;
};

Stopwatch.prototype.stop = function() {
  if (!this.startClock) throw new Error("Stopwatch is not started!");
  this.startClock = false;

  this.stopTime = new Date().getTime();
  this.stopTime = (this.stopTime % (1000 * 60)) / 1000;

  this.totalTime += this.stopTime - this.startTime;

  this.startTime = 0;
  this.stopTime = 0;
};

Stopwatch.prototype.reset = function() {
  this.totalTime = 0;
};

const sw = new Stopwatch();
