const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (line) => {
  let stones = ["B","W"];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === 'L') { //Lの時
      if((i + 1) % 2 == 0) { //白の時
        stones.unshift("W");
        let firstW = stones.indexOf("W");
        let lastW = stones.lastIndexOf("W");
        for (let j = firstW; j <= lastW; j++) {
          if (stones[j] === "B") {
            stones[j] = "W";
          }
        }
      } else { //黒の時
        stones.unshift("B");
        let firstB = stones.indexOf("B");
        let lastB = stones.lastIndexOf("B");
        for (let j = firstB; j <= lastB; j++) {
          if (stones[j] === "W") {
            stones[j] = "B";
          }
        }
      }
    }

    if (line[i] === 'R') { //Rの時
      if((i + 1) % 2 == 0) { //白の時
        stones.push("W");
        let firstW = stones.indexOf("W");
        let lastW = stones.lastIndexOf("W");
        for (let j = firstW; j <= lastW; j++) {
          if (stones[j] === "B") {
            stones[j] = "W";
          }
        }
      } else { //黒の時
        stones.push("B");
        let firstB = stones.indexOf("B");
        let lastB = stones.lastIndexOf("B");
        for (let j = firstB; j <= lastB; j++) {
          if (stones[j] === "W") {
            stones[j] = "B";
          }
        }
      }
    }
  }

  let B = stones.filter(stone => stone === 'B').length;
  let W = stones.filter(stone => stone === 'W').length;

  console.log(B + " " + W);

  readline.close();
});
