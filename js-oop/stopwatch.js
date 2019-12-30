// constructor function
function Stopwatch() {
  let startTime = 0;
  let stopTime = 0;
  let totalTime = 0;
  let startClock = false;
  this.start = function() {
    if (startClock) throw new Error("Stopwatch has already started!");
    startClock = true;
    startTime = new Date().getTime();
    startTime = (startTime % (1000 * 60)) / 1000;
  };

  this.stop = function() {
    if (!startClock) throw new Error("Stopwatch is not started!");
    startClock = false;

    stopTime = new Date().getTime();
    stopTime = (stopTime % (1000 * 60)) / 1000;

    totalTime += stopTime - startTime;

    startTime = 0;
    stopTime = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return totalTime;
    }
  });

  this.reset = function() {
    totalTime = 0;
  };
}

const sw = new Stopwatch();
