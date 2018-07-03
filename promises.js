async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Worker {
  async work() {
    await this.complete()
    if (completed < limit) {
      await this.work()
    }
  }

  async complete() {
    await sleep(Math.random() * 1000);

    const soFar = ++completed; // iteration
    const left = limit - soFar; // iterations
    var duration = (Date.now() - started) / 1000; // time
    const pace = duration / soFar; // seconds per iteration
    var eta = pace * left; // seconds

    eta = Math.round(eta * 1000) / 1000;
    duration = Math.round(duration * 1000) / 1000;

    console.log(`${soFar},${eta},${duration}`);
  }
}

const limit = 20 * 1000;
let concurrency = process.argv[2];
concurrency = +concurrency || 1;
let completed = 0;

console.log(`iteration,eta,duration`);

const started = new Date();
const workers = [...Array(concurrency).keys()]
  .map(e => new Worker())
  .map(async w => w.work())

Promise.all(workers);
