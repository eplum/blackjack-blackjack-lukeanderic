const {
    default: { singleDeckGame, Result }
  } = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

const userChips = document.querySelector(".chips");
const userAnte = prompt(
  `
  Place your bet?
  Available chips: ${singleDeckGame.getUserChips()}
  `
);

userChips.textContent = userAnte;
singleDeckGame.receiveAnte(userAnte);

Dom.displayChips(singleDeckGame);
Dom.displayWager(singleDeckGame);



  singleDeckGame.deal();

  let dealerHand = singleDeckGame.getDealerHand();
  console.log(dealerHand.getCards());
  const dealerCards = document.querySelector(".dealer-hand"); 
  Dom.renderSingleCard(dealerHand.getCards()[0],dealerCards);
  Dom.renderHoleCard(dealerCards);
  console.log(dealerHand.getCards());

  let userHand = singleDeckGame.getUserHand(); 
  const userCards = document.querySelector(".user-hand");
  Dom.renderCards(userHand.getCards(),userCards);



  if(singleDeckGame.isUserBust() || singleDeckGame.isDealerBust())
   {
    Dom.stayButtonEvent(singleDeckGame, Result)
    }


  // handle hit button
  const hitButton = document.querySelector(".actions__hit");
      hitButton.addEventListener("click", () => 
      Dom.hitButtonEvent(singleDeckGame,Result)
      )


   // respond to double button
   const doubleButton = document.querySelector(".actions__double");
      doubleButton.addEventListener("click", () => 
        Dom.doubleButtonEvent()
      )

  
  const stayButton = document.querySelector(".actions__stay");
      stayButton.addEventListener("click", () => 
      Dom.stayButtonEvent(singleDeckGame, Result)
      )





//removes all cards

  // const dealButton = document.querySelector(".actions__deal");
  // dealButton.addEventListener("click", () => {
  //     console.log("deal")
  //     const dealerCards = document.querySelector(".dealer-hand");
  //     singleDeckGame.deal();

  //     dealerCards.append(Dom.generateCard(dealerHand.getCards()[0]));
  //     dealerCards.append(Dom.generateCard(dealerHand.getCards()[1]));
  //     const userCards = document.querySelector(".user-hand");

  //     userCards.append(Dom.generateCard(userHand.getCards()[0]));
  //     userCards.append(Dom.generateCard(userHand.getCards()[1]));
      
  // })

  // const newGameButton = document.querySelector(".start-game");
  //     newGameButton.addEventListener("click", () => {
  //     console.log("newGame")
  //     dealerCards.remove()
  //     userCards.remove()
  //     singleDeckGame.deal();
  // })

  // const quitButton = document.querySelector(".quit-game");
  //     quitButton.addEventListener("click", () => {
  //     console.log("quit")
  //     dealerCards.remove()
  //     userCards.remove()

  // })


