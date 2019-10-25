const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");

const Dom = require("./utils/Dom");

singleDeckGame.deal();

  let dealerHand = singleDeckGame.getDealerHand();
  const dealerCards = document.querySelector(".dealer-hand");
  Dom.renderCards(dealerHand.getCards(),dealerCards);


  let userHand = singleDeckGame.getUserHand(); 
  const userCards = document.querySelector(".user-hand");
  Dom.renderCards(userHand.getCards(),userCards);

  // respond to hit button

  singleDeckGame.hitUser();
  Dom.renderHit(userHand.getCards(),userCards);
  singleDeckGame.evaluateUser();  // need to decide what to do
  
  // hit dealer

  singleDeckGame.hitDealer();
  Dom.renderHit(dealerHand.getCards(),dealerCards);
  singleDeckGame.evaluateDealer(); // need to decide what to do



// get and process ante

// deal cards

// evaluate for blackjack, if so skip playing loop

// begin loop to play hand

// respond to hit, stay, double

// evaluate for bust

// dealer needs hit?

// if so, evaluate for bust

// if both still playing, loop again

// else adjust chip count & tally result

