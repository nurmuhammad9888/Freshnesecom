const NUMBER_OF_CARDS = 12
const listViewToggler = document.querySelector("[data-view='list']")
const gridViewToggler = document.querySelector("[data-view='grid']")
const cardWrapper = document.querySelector("[data-card-wrapper]")
const viewsListItems = document.querySelectorAll(".views-list__item")

console.log(viewsListItems);


function gridView() {
    clearCards()
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
        let cardTemplate = document.querySelector("[data-card]").content.cloneNode(true).children[0]
        handleCardImage(cardTemplate)
        addCard(cardTemplate, cardWrapper)
    }
}
function addCard(template) { cardWrapper.append(template) }
function listView() {
    clearCards()
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
        let cardTemplate = document.querySelector("[data-list-card]").content.cloneNode(true).children[0]
        handleCardImage(cardTemplate)
        addCard(cardTemplate)
    }
}
function handleCardImage(template) {
    let cardImg = template.querySelector(".card-img-top");
    cardImg.setAttribute("src", '../images/card.jpg')
}

viewsListItems.forEach(viewsItem => {
    viewsItem.addEventListener("click", () => {
        clearViews()
        viewsItem.classList.add("views-list__item--active")
    })
})

function clearViews() {
    viewsListItems.forEach(viewsItem => {
        viewsItem.classList.remove("views-list__item--active")
    })

}

function clearCards() { cardWrapper.innerHTML = "" }
listViewToggler.addEventListener("click", listView)
gridViewToggler.addEventListener("click", gridView)
listView()