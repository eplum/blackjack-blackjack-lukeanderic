const {
    default: { singleDeckGame, Result }
  } = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

Dom.startListening(singleDeckGame,Result);

Dom.startAHand(singleDeckGame,Result);
