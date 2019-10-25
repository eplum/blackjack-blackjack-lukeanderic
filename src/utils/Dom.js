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

  renderCard(cardsArray, containerElement) {
    cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    })
 
  },

  displayChips(singleDeckGame){
    const chips = document.querySelector(".chips");
    const span = document.createElement("span");
      span.classList.add("chips");
      chips.textContent = singleDeckGame.getUserChips();
  },

  
}