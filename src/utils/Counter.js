let currentWin = 0;
let currentLoss = 0;
let currentPush = 0;

class outcomeCounter {
  static counter(result) {

    let count = 0;

    switch (result){

    case "win":
       count = ++currentWin;
    break;

    case "loss":
      count = ++currentLoss;
    break;

    case "push":
      count = ++currentPush;
    break;

    }

    return count;

  }
}

module.exports = outcomeCounter;