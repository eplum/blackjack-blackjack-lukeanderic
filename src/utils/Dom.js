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
    const span = document.createElement("span");
      span.classList.add("chips");
      chips.textContent = singleDeckGame.getUserChips();
  },

  displayWager(singleDeckGame){
    const wager = document.querySelector(".pot");
    const span = document.createElement("span");
      span.classList.add("wager");
      wager.textContent = singleDeckGame.getAnte();
  },
  disableActionButtons(toggle) {
    const actionButtons = document.querySelectorAll("div.actions__round > button");
    actionButtons.forEach(button => button.setAttribute("disabled", toggle));
  },

  renderHoleCard(containerElement) {
    
    containerElement.append(this.generateHoleCard());


  }
  
}