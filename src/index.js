const {
    default: { singleDeckGame }
  } = require("blackjack-dealer-logic");
  
  
const Dom = require("./utils/Dom");
singleDeckGame.deal();

const dealerHand = singleDeckGame.getDealerHand();
  

  const dealerCards = document.querySelector(".dealer-hand");
  
  dealerHand.getCards().forEach(card  => {

    dealerCards.append(Dom.generateCard(card))

  });

  // dealerCards.append(Dom.generateCard(dealerHand.getCards()[0]));
  // dealerCards.append(Dom.generateCard(dealerHand.getCards()[1]));



  const userHand = singleDeckGame.getUserHand();
  
  const userCards = document.querySelector(".user-hand");
  // Dom.generateCard(userHand.getCards()[0])
  // Dom.generateCard(userHand.getCards()[1]);


  userCards.append(Dom.generateCard(userHand.getCards()[0]));
  userCards.append(Dom.generateCard(userHand.getCards()[1]));


//button - works
  const hitButton = document.querySelector(".actions__hit");
  hitButton.addEventListener("click", () => {
      console.log("hit a card")
      singleDeckGame.hitUser();
      singleDeckGame.evaluateUser();
      document.querySelector(".user-hand").innerHTML = "";
      Dom.renderCard(
          singleDeckGame.getUserHand().getCards(),
          document.querySelector(".user-hand")
          )
          
})
  
  const stayButton = document.querySelector(".actions__stay");
  stayButton.addEventListener("click", () => {
      console.log("stay")
      singleDeckGame.evaluateUser();
      document
          
      })
//doesnt work

  const doubleButton = document.querySelector(".actions__double");
  doubleButton.addEventListener("click", () => {
      console.log("double")
      singleDeckGame.hitUser();
      singleDeckGame.evaluateUser();
      Dom.renderCard(cardsArray, containerElement)
      singleDeckGame.getUserHand().getCards(),
      document.querySelector(".user-hand")
      const actionsBox = document.querySelector("actions__round")
      const actionButtons = actionsBox.querySelectorAll("button")
      actionButtons.forEach(button => button.setAttribute("disabled", "true"))
      
  })
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


  
 
