const Counter = require("./Counter");

module.exports = {

generateCard(card) {
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
  }, 

  generateHoleCard() {
    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");
  
    const valueContainer = document.createElement("section");
    valueContainer.classList.add("value-container");
    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = "";
  
    const suit = document.createElement("span");
    suit.classList.add("suit");
    suit.textContent = "";
  
    valueContainer.append(value);
    valueContainer.append(suit);
    playingCard.append(valueContainer);

    console.log(playingCard);
 
    return playingCard
  }, 


  renderCards(cardArray,containerElement) {
    cardArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    });
  },

  renderHit(cardArray,containerElement) {
    containerElement.append(this.generateCard(cardArray[cardArray.length - 1]));
  },

  renderSingleCard(card,containerElement) {
    
    containerElement.append(this.generateCard(card));
  },

  displayChips(singleDeckGame){
    const chips = document.querySelector(".chips");
      chips.innerHTML = "";
      chips.textContent = singleDeckGame.getUserChips();
  },

  displayWager(singleDeckGame){
    const wager = document.querySelector(".pot");
      wager.innerHTML = "";
      wager.textContent = singleDeckGame.getAnte();
  },
  disableActionButtons(toggle) {
    const actionButtons = document.querySelectorAll("div.actions__round > button");
    actionButtons.forEach(button => button.setAttribute("disabled", toggle));
  },

  renderHoleCard(containerElement) {
    
    containerElement.append(this.generateHoleCard());

  },

  hitButtonEvent(singleDeckGame,Result){
    singleDeckGame.hitUser();
    singleDeckGame.evaluateUser();
    const userHand = singleDeckGame.getUserHand();
    const userCards = document.querySelector(".user-hand");
    this.renderHit(userHand.getCards(),userCards);
    console.log(singleDeckGame.evaluateUser());
    singleDeckGame.evaluateUser()

    if(singleDeckGame.isUserBust()) {
      console.log("user bust");
      singleDeckGame.evaluateDealer();
      this.processOutcome(singleDeckGame,Result);
      }
    },

    resolveGame(singleDeckGame,Result){

      if(singleDeckGame.isUserBust()){
        // do nothing
      }
    
      else
    
      {
        console.log("settle dealer hand");
        singleDeckGame.settleDealerHand();
        singleDeckGame.evaluateDealer();

        const dealerHand = singleDeckGame.getDealerHand();
        const dealerCards = document.querySelector(".dealer-hand"); 
        dealerCards.innerHTML = "";
        console.log(dealerHand.getCards())
        this.renderCards(dealerHand.getCards(), dealerCards);      
      }
      
    },

    processOutcome(singleDeckGame,Result){
        let ConfirmMessage = "";
        switch (singleDeckGame.outcome()){
    
            case Result.WIN:
              console.log("win")
               ConfirmMessage = `You won!  ヽ(•‿•)ノ 
               
               Play another hand?`;

               singleDeckGame.userWin()

               this.displayCounts(singleDeckGame,"win",".win-count");
               
              
            break;
    
            case  Result.LOSS:
                console.log("loss")
                ConfirmMessage = `You lost.   (︶︿︶)
                
                Play another hand?`;

                this.displayCounts(singleDeckGame,"loss",".loss-count");

            break;
            
            case  Result.PUSH:
                console.log("push")
                ConfirmMessage = `It is a push.
                
                Play another hand?`;
                singleDeckGame.pushHand();
                this.displayCounts(singleDeckGame,"push",".push-count")


            break;
    
            default:
                console.log("error")
            break;
          
            
        }
        
        this.displayChips(singleDeckGame);
        singleDeckGame.resetAnte();
        this.displayWager(singleDeckGame);
    
        const userDecision = confirm(ConfirmMessage);
    
        console.log(userDecision)
    
      },
      
      stayButtonEvent(singleDeckGame, Result) {
        console.log("stay");
        singleDeckGame.standUser();
        singleDeckGame.evaluateUser();
        singleDeckGame.evaluateDealer();
        //this.disableActionButtons("true");  does not re-enable, if used

        this.resolveGame(singleDeckGame, Result);
        this.processOutcome(singleDeckGame,Result);
      },
      doubleButtonEvent(singleDeckGame, Result) {
        singleDeckGame.doubleUser();
        singleDeckGame.evaluateUser();
        const userHand = singleDeckGame.getUserHand();
        const userCards = document.querySelector(".user-hand");
        this.renderHit(userHand.getCards(), userCards);
        this.displayChips(singleDeckGame);
        this.displayWager(singleDeckGame);
        this.stayButtonEvent(singleDeckGame, Result);
      },

      displayCounts(singleDeckGame,result,container){
        const count = document.querySelector(container);
        count.innerHTML = "";
        count.textContent = Counter.counter(result);
      },
      requestAnte(singleDeckGame) {
        const userChips = document.querySelector(".chips");
        const userAnte = prompt(`
        Place your bet?
        Available chips: ${singleDeckGame.getUserChips()}
        `);
        userChips.textContent = userAnte;
        singleDeckGame.receiveAnte(userAnte);
        this.displayChips(singleDeckGame);
        this.displayWager(singleDeckGame);
      },
      startAHand(singleDeckGame) {

        const dealerCards = document.querySelector(".dealer-hand");
        dealerCards.innerHTML = "";

        const userCards = document.querySelector(".user-hand");
        userCards.innerHTML = "";

       // this.disableActionButtons("false");  does not re-enable

        this.requestAnte(singleDeckGame);
        singleDeckGame.resetPlayers();

        singleDeckGame.deal();

        let dealerHand = singleDeckGame.getDealerHand();
        this.renderSingleCard(dealerHand.getCards()[0], dealerCards);
        this.renderHoleCard(dealerCards);
      
        let userHand = singleDeckGame.getUserHand();
        this.renderCards(userHand.getCards(), userCards);
      },
      startListening(singleDeckGame,Result) {
        const hitButton = document.querySelector(".actions__hit");
        hitButton.addEventListener("click", () => this.hitButtonEvent(singleDeckGame, Result));
        // respond to double button
        const doubleButton = document.querySelector(".actions__double");
        doubleButton.addEventListener("click", () => this.doubleButtonEvent(singleDeckGame, Result));
        const stayButton = document.querySelector(".actions__stay");
        stayButton.addEventListener("click", () => this.stayButtonEvent(singleDeckGame, Result));
        const dealButton = document.querySelector(".actions__deal");
        dealButton.addEventListener("click", () => {
          this.startAHand(singleDeckGame);
        });
      }
}