const NUMBER_OF_CARDS = 12
const listViewToggler = document.querySelector("[data-view='list']")
const gridViewToggler = document.querySelector("[data-view='grid']")
const cardWrapper = document.querySelector("[data-card-wrapper]")


function gridView() {
    clearCards()
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
        let cardTemplate = document.querySelector("[data-card]").content.cloneNode(true).children[0]
        addCard(cardTemplate, cardWrapper)
    }
}
function addCard(template) { cardWrapper.append(template) }
function listView() {
    clearCards()
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
        let cardTemplate = document.querySelector("[data-list-card]").content.cloneNode(true).children[0]
        addCard(cardTemplate)
    }
}
function clearCards() { cardWrapper.innerHTML = "" }
listViewToggler.addEventListener("click", listView)
gridViewToggler.addEventListener("click", gridView)
listView()