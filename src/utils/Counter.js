let currentWins = 0;

class outcomeCounter {
  static counter() {
    return currentWins++;
  }
}

module.exports = outcomeCounter;