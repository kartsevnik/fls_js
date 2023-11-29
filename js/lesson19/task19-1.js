// ====================================================================================================================== //
// Задача 1. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку
// ====================================================================================================================== //
class CardProduct {
    static cards = 0
    constructor({ id, title, price, image }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    createCardsContainer(containerSelector) {
        if (CardProduct.cards === 0) {
            let cards = document.createElement('div');
            cards.className = 'cards';

            let targetElement = document.querySelector(containerSelector)
            targetElement.append(cards)
            CardProduct.cards++
        }
    }


    render(containerSelector) {
        // Создаем общий контейнер для всех карточек через метод createCardsContainer
        this.createCardsContainer(containerSelector)
        let cards = document.querySelector(`.cards`)

        // Создаем карточку для товара
        let card = document.createElement('div')
        card.className = 'card'

        // В каждой карточке добавляем изображение
        let cardImage = document.createElement('div')
        cardImage.className = 'card__image'
        let img = document.createElement('img')
        img.src = this.image
        cardImage.append(img)
        card.append(cardImage)

        // В каждой карточке добавляем описание товара
        let cardDescription = document.createElement('div')
        cardDescription.className = `card__description`

        let cardTitle = document.createElement(`div`)
        cardTitle.append(`Title: ${this.title}`)
        cardDescription.append(cardTitle)

        let cardPrice = document.createElement(`div`)
        cardPrice.append(`Price: ${this.price}`)
        cardDescription.append(cardPrice)

        let cardID = document.createElement(`div`)
        cardID.append(`ID: ${this.id}`)
        cardDescription.append(cardID)

        card.append(cardDescription)

        // Добавляем готовую карточку товара в общий контейнер
        cards.append(card)

        // Добавляем способ выбора товара
        card.onclick = () => { card.classList.toggle(`checked`) }
    }

}
// ====================================================================================================================== //
let products = [
    {
        id: 35165,
        title: 'Notebook 1',
        price: 1000,
        image: '../../img/task19-1/1.jpg',
    },
    {
        id: 25456,
        title: 'Notebook 2',
        price: 1500,
        image: '../../img/task19-1/2.jpg',
    },
    {
        id: 12398,
        title: 'Notebook 3',
        price: 1700,
        image: '../../img/task19-1/3.jpg',
    },
    {
        id: 14253,
        title: 'Notebook 4',
        price: 1600,
        image: '../../img/task19-1/4.jpg',
    },
]
// ====================================================================================================================== //
window.onload = function () {
    for (const product of products) {
        new CardProduct(product).render(`.task19-1`)
    }
}