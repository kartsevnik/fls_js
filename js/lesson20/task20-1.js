// ====================================================================================================================== //
// Задача.
// Розробити елемент для вводу кількості вибраного товару
// (мінімальна кількість 1,
//  максимальна кількість 10,
//  при перевищенні блокувати кнопку)
// ====================================================================================================================== //

const listOfProducts = [
    {
        name: 'LG UHD | TV 50 Serie UQ75 | UltraHD 4K, Smart TV, HDR10 Pro, Filmmaker Mode',
        imgSrc: '../../img/task20-1/lg-tv-50UQ75006LF-medium01.webp',
        quantity: 10,
        price: 399
    },
    {
        name: 'SAMSUNG UE43AU7170UXZT TV LED, 43 pollici, UHD 4K, No',
        imgSrc: '../../img/task20-1/fee_786_587_png.webp',
        quantity: 5,
        price: 199
    },
    {
        name: 'Hisense UHD 55" 4K 55A6CG',
        imgSrc: '../../img/task20-1/3.jpg',
        quantity: 7,
        price: 299
    },
]

class CardProduct {
    constructor({ name, imgSrc, quantity, price }) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.quantity = quantity;
        this.price = price;
    }

    render(selector) {
        const selectorContent = document.querySelector(selector);

        // Создали общий контейнер
        this.mainContainer = document.createElement('div');
        this.mainContainer.classList.add('product')

        // Блок с изображением
        const imgDiv = document.createElement('div');
        imgDiv.classList.add(`product__image`)
        const img = document.createElement('img');
        img.src = this.imgSrc
        imgDiv.append(img)
        this.mainContainer.append(imgDiv)

        // Блок с названием
        const nameDiv = document.createElement('div');
        nameDiv.classList.add(`product__product__name`)
        nameDiv.innerText = this.name
        this.mainContainer.append(nameDiv)

        // Блок с количеством
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add(`product__quantity`)

        const btnMinus = document.createElement('button');
        btnMinus.innerText = `-`
        btnMinus.setAttribute("disabled", "")
        btnMinus.classList.add(`button`, `minus`)
        btnMinus.onclick = this.minusProduct.bind(btnMinus, this.quantity, this.price);
        quantityDiv.append(btnMinus)

        const quantity = document.createElement('span');
        quantity.innerText = 0
        quantityDiv.append(quantity)

        const btnPlus = document.createElement('button');
        btnPlus.innerText = `+`
        btnPlus.classList.add(`button`, `plus`)
        // btnPlus.onclick = this.plusProduct
        btnPlus.onclick = this.plusProduct.bind(btnPlus, this.quantity, this.price);
        quantityDiv.append(btnPlus)

        this.mainContainer.append(quantityDiv)

        // Блок со стоимостью
        const priceDiv = document.createElement('div');
        priceDiv.classList.add(`product__price`)

        const priceTitle = document.createElement('span');
        priceTitle.classList.add(`product__price-title`)
        priceTitle.innerText = `To pay: `
        priceDiv.append(priceTitle)

        const priceSum = document.createElement('span');
        priceSum.classList.add(`product__price-sum`)
        priceSum.innerText = 0
        priceDiv.append(priceSum)

        const priceCurrency = document.createElement('span');
        priceCurrency.classList.add(`product__price-currency`)
        priceCurrency.innerText = ` $`
        priceDiv.append(priceCurrency)
        this.mainContainer.append(priceDiv)

        selectorContent.append(this.mainContainer)

    }

    plusProduct(quantity, price, event) {
        //find the parent
        const parent = this.parentElement
        //find the previousSibling
        let tempValue = parseInt(this.previousSibling.innerText)

        tempValue += 1
        this.previousSibling.innerText = tempValue

        // убираем атрибут disabled с минуса при значении больше 0
        if (tempValue > 0) {

            parent.firstElementChild.removeAttribute("disabled")
        }

        // добавляем атрибут disabled 'плюсу' при значении равному количеству продуктов
        if (tempValue === quantity) {
            this.setAttribute("disabled", "")
        }

        // считаем стоимость продукции
        let nextElementOfParent = parent.nextElementSibling
        let firstChild = nextElementOfParent.firstElementChild
        let priceElement = firstChild.nextElementSibling
        let newprice = price * tempValue
        priceElement.innerText = newprice
    }

    minusProduct(quantity, price, event) {
        //find the parent
        const parent = this.parentElement
        //find the previousSibling
        let tempValue = parseInt(this.nextSibling.innerText)
        console.log(tempValue);

        tempValue -= 1
        this.nextSibling.innerText = tempValue


        if (tempValue === 0) {
            this.setAttribute("disabled", "")
        }

        // считаем стоимость продукции
        let nextElementOfParent = parent.nextElementSibling
        let firstChild = nextElementOfParent.firstElementChild
        let priceElement = firstChild.nextElementSibling
        let newprice = price * tempValue
        priceElement.innerText = newprice


    }
}
window.onload = function () {
    for (const product of listOfProducts) {
        let start = new CardProduct(product).render(`.resolve20_1`)
    }
}


// ====================================================================================================================== //

// ====================================================================================================================== //
