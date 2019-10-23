const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();

const Dom = require("./utils/Dom");


  const dealerHand = singleDeckGame.getDealerHand();
  
  Dom.generateCard(dealerHand.getCards()[0])
  Dom.generateCard(dealerHand.getCards()[1]);

  const table = document.querySelector(".table");
  table.append(Dom.generateCard(dealerHand.getCards()[0]));
  table.append(Dom.generateCard(dealerHand.getCards()[1]));



  const userHand = singleDeckGame.getUserHand();
  
  Dom.generateCard(userHand.getCards()[0])
  Dom.generateCard(userHand.getCards()[1]);


  table.append(Dom.generateCard(userHand.getCards()[0]));
  table.append(Dom.generateCard(userHand.getCards()[1]));



  
 
