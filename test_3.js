const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (line) => {
  
  let num = Array.from(line, Number);
  num.sort((a, b) => a - b);
  let zero = num.indexOf(0);
  if(zero !== -1) {
    num.splice(zero, 1);
    num.splice(1, 0, 0);
  }
  let minNonZero = Math.min(...num.filter(n => n !== 0));
  let min = num.indexOf(minNonZero);
  if(min !== -1) {
    num.splice(min, 1);
    num.unshift(minNonZero);
  }
  console.log(num.join(""));

  readline.close();
});