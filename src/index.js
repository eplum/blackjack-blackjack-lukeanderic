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
     resolveGame();
    }


  // respond to hit button
  const hitButton = document.querySelector(".actions__hit");
      hitButton.addEventListener("click", () => {
      singleDeckGame.hitUser();
      Dom.renderHit(userHand.getCards(),userCards);

      console.log(singleDeckGame.evaluateUser());

      if(singleDeckGame.isUserBust()) {
        console.log("user bust");
        resolveGame();
        }
      })

   // respond to double button
   const doubleButton = document.querySelector(".actions__double");
      doubleButton.addEventListener("click", () => {
      singleDeckGame.doubleUser();
      Dom.renderHit(userHand.getCards(),userCards);
      Dom.displayChips(singleDeckGame);
      Dom.displayWager(singleDeckGame);
      resolveGame();
      })

  
  const stayButton = document.querySelector(".actions__stay");
      stayButton.addEventListener("click", () => {
      console.log("stay");
      Dom.disableActionButtons("true");

      resolveGame();

      })

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

function resolveGame(){

  if(singleDeckGame.isUserBust()){
    // do nothing
  }

  else

  {
    console.log("settle dealer hand")
    singleDeckGame.settleDealerHand();
    const dealerHand = singleDeckGame.getDealerHand();
    const dealerCards = document.querySelector(".dealer-hand"); 
    dealerCards.innerHTML = "";
    console.log(dealerHand.getCards())
    Dom.renderCards(dealerHand.getCards(), dealerCards);
    
  }

    let ConfirmMessage = "";
    switch (singleDeckGame.outcome()){

        case Result.WIN:
          console.log("win")
           ConfirmMessage = "You won!  ヽ(•‿•)ノ/n/nPlay another hand?";
           singleDeckGame.userWin()
        break;

        case  Result.LOSS:
            console.log("loss")
            ConfirmMessage = "You lost.  (⌣́_⌣̀) /n/nPlay another hand?";
           
        break;
        
        case  Result.PUSH:
            console.log("push")
            ConfirmMessage = "It is a push/n/nPlay another hand?";
            singleDeckGame.pushHand();
        break;

        default:
            console.log("error")
        break;
      
        
    }

    Dom.displayChips(singleDeckGame);
    singleDeckGame.resetAnte();
    Dom.displayWager(singleDeckGame);
    

    const userDecision = confirm(ConfirmMessage);

    console.log(userDecision)

    // dealerCards.innerHTML = "";
    // userCards.innerHTML = "";

    // prepare to restart

    // dealerCards.innerHTML = "";
    // userCards.innerHTML = "";

   // Dom.displayChips(singleDeckGame);
  }
