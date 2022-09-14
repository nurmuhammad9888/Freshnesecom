const NUMBER_OF_CARDS = 12

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
    addCard()
}

function addCard() {
    const cardWrapper = document.getElementById("cardWrapper")
    const cardTemplate = document.querySelector("[data-card]").content.cloneNode(true).children[0]
    cardWrapper.append(cardTemplate)
}