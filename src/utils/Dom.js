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


  renderCards(cardArray,target) {
    cardArray.forEach(card => {
      target.append(this.generateCard(card));
    });
  },

  renderHit(cardArray,target) {
    target.append(this.generateCard(cardArray[cardArray.length - 1]));
  }
}