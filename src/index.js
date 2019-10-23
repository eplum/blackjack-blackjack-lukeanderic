const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();

const Dom = require("./utils/Dom");


  const dealerHand = singleDeckGame.getDealerHand();
  
  // dealerHand.foreach ()
  // Dom.generateCard(dealerHand.getCards()[0])
  // Dom.generateCard(dealerHand.getCards()[1]);

  const dealerCards = document.querySelector(".dealer-hand");
  dealerCards.append(Dom.generateCard(dealerHand.getCards()[0]));
  dealerCards.append(Dom.generateCard(dealerHand.getCards()[1]));



  const userHand = singleDeckGame.getUserHand();
  
  const userCards = document.querySelector(".user-hand");
  // Dom.generateCard(userHand.getCards()[0])
  // Dom.generateCard(userHand.getCards()[1]);


  userCards.append(Dom.generateCard(userHand.getCards()[0]));
  userCards.append(Dom.generateCard(userHand.getCards()[1]));



  
 
