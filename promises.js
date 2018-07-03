async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function complete() {
  await sleep(1000);

  const soFar = ++completed; // iteration
  const left = limit - soFar; // iterations
  var duration = (Date.now() - started) / 1000; // time
  const pace = duration / soFar; // seconds per iteration
  var eta = pace * left; // seconds

  eta = Math.round(eta * 1000) / 1000;
  duration = Math.round(duration * 1000) / 1000;

  console.log(`${soFar},${eta},${duration}`);
}

async function run() {
  started = new Date();
  for(let i = 0; i < limit / concurrency; i ++) {
    const completions = [...Array(concurrency).keys()].map(complete);
    await Promise.all(completions);
  }
}

const limit = 20 * 1000;
let concurrency = process.argv[2];
concurrency = +concurrency || 1;
let completed = 0;
let started;

console.log(`iteration,eta,duration`);
run();
