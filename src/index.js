const {
    default: { singleDeckGame, Result }
  } = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");


Dom.startAHand(singleDeckGame,Result);


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

  const newGameButton = document.querySelector(".start-game");
      newGameButton.addEventListener("click", () =>  {


        Dom.startAHand(singleDeckGame)

      })

  // const quitButton = document.querySelector(".quit-game");
  //     quitButton.addEventListener("click", () => {
  //     console.log("quit")
  //     dealerCards.remove()
  //     userCards.remove()

  // })

