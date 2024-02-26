const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (line) => {

  let N = parseInt(line);
  let result = (N - 1) / 6;
  console.log(Math.ceil(result));

  readline.close();
});