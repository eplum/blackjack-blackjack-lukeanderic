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
  const hitButton = document.querySelector(".actions__hit");
      hitButton.addEventListener("click", () => {
      singleDeckGame.hitUser();
      Dom.renderHit(userHand.getCards(),userCards);
      singleDeckGame.evaluateUser();  // need to decide what to do

      console.log("hit button")
      })

   // respond to double button
   const doubleButton = document.querySelector(".actions__double");
      doubleButton.addEventListener("click", () => {
      singleDeckGame.hitUser();
      Dom.renderHit(userHand.getCards(),userCards);

      // double bet
      
      singleDeckGame.evaluateUser();  // need to decide what to do
      
      Dom.disableActionButtons("true");

      })

   
  // const stayButton = document.querySelector(".actions__stay");

  // //this may get wiped out in Eric's latest push
  
  //     stayButton.addEventListener("click", () => {
  //     console.log("stay");
  //     Dom.disableActionButtons("true");
      
  //     singleDeckGame.settleDealerHand();
  //     const finalScore = singleDeckGame.outcome();
  //     const dealer = singleDeckGame.evaluateDealer();
  //     const user = singleDeckGame.evaluateUser();
  //     if(dealer > user)

          
  //     })

//removes all cards

  const dealButton = document.querySelector(".actions__deal");
  dealButton.addEventListener("click", () => {
      console.log("deal")
      const dealerCards = document.querySelector(".dealer-hand");
      singleDeckGame.deal();

      dealerCards.append(Dom.generateCard(dealerHand.getCards()[0]));
      dealerCards.append(Dom.generateCard(dealerHand.getCards()[1]));
      const userCards = document.querySelector(".user-hand");

      userCards.append(Dom.generateCard(userHand.getCards()[0]));
      userCards.append(Dom.generateCard(userHand.getCards()[1]));


      
  })

  const newGameButton = document.querySelector(".start-game");
      newGameButton.addEventListener("click", () => {
      console.log("newGame")
      dealerCards.remove()
      userCards.remove()
      singleDeckGame.deal();
  })

  const quitButton = document.querySelector(".quit-game");
      quitButton.addEventListener("click", () => {
      console.log("quit")
      dealerCards.remove()
      userCards.remove()

  })

Dom.displayChips(singleDeckGame)

