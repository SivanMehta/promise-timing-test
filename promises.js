async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function complete(i) {
  await sleep(Math.random() * 10 * 1000);

  const soFar = ++completed; // iteration
  const left = limit - soFar; // iterations
  var duration = (Date.now() - started) / 1000; // time
  const pace = duration / soFar; // seconds per iteration
  var eta = pace * left // seconds;

  eta = Math.round(eta * 1000) / 1000;
  duration = Math.round(duration * 1000) / 1000;

  console.log(`${soFar},${eta},${duration}`);
}

async function run() {
  const promises = [...Array(limit).keys()].map(complete);

  started = new Date();
  await Promise.all(promises);
}

const limit = 20 * 1000;
let completed = 0;
let started;

console.log('iteration,eta,duration');
run();
