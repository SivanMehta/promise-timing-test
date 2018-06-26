async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function complete(i) {
  await sleep(Math.random() * 10 * 1000);

  console.log(i);
}

async function run() {
  const promises = [...Array(1000).keys()].map(complete);
  await Promise.all(promises)
}

const limit = 1000;
let completed = 0;

run()
