
const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();


  const dealer = document.createElement("section");
  dealer.classList.add("dealer-hand");

  const dealerHand = singleDeckGame.getDealerHand();
  
  generateCard(dealerHand.getCards()[0])
  generateCard(dealerHand.getCards()[1]);

  const table = document.querySelector(".table");
  table.append(generateCard(dealerHand.getCards()[0]));
  table.append(generateCard(dealerHand.getCards()[1]));

  const user = document.createElement("section");
  user.classList.add("dealer-hand");

  const userHand = singleDeckGame.getUserHand();
  
  generateCard(userHand.getCards()[0])
  generateCard(userHand.getCards()[1]);


  table.append(generateCard(userHand.getCards()[0]));
  table.append(generateCard(userHand.getCards()[1]));



  
  function generateCard(card) {
    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");
  
    const valueContainer = document.createElement("section");
    valueContainer.classList.add("value-container");
  
    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = card.getValue();
  
    const suit = document.createElement("span");
    suit.classList.add("suit");
    suit.textContent = card.getSuit();
  
    valueContainer.append(value);
    valueContainer.append(suit);
    playingCard.append(valueContainer);
 
    return playingCard
    // const table = document.querySelector(".table");
    // table.append(playingCard);
  }