const timers = process.argv.splice(2);
let seconds = 0;
// if (timers.length === 0) { return; }
for (let timer of timers) {
  if (timer > 0 && timer !== NaN) {
    seconds = timer * 1000;
    // console.log('seconds', seconds);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds);
  }
}
