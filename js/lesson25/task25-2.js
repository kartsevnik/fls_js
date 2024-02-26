// Задача 2.
// Дано Shop-- клас, що містить список товарів
// масив об’єктів класу Product (назва, ціна, кількість одиниць.
// Додати можливість ітератора до класу Shop,
// щоб при ітеруванні для кожного елмента виводився рядок «товар - загальна вартість»

class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getName() {
        return this.name
    }

    getTotalSum() {
        return this.price * this.quantity
    }
}

class Shop {
    constructor() {
        this.productList = [];
    }

    add(product) {
        this.productList.push(product);
    }

    [Symbol.iterator]() {
        let currentItemIndex = 0;
        const products = this.productList;

        return {
            next() {
                if (currentItemIndex < products.length) {
                    const product = products[currentItemIndex];
                    currentItemIndex++;
                    return { value: `${product.getName()} - ${product.getTotalSum()}`, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const Product1 = new Product("Product1", 5, 1)
const Product2 = new Product("Product2", 5, 2)
const Product3 = new Product("Product3", 5, 3)
const Product4 = new Product("Product4", 5, 4)
const Product5 = new Product("Product5", 5, 5)


let shop = new Shop
shop.add(Product1)
shop.add(Product2)
shop.add(Product3)
shop.add(Product4)
shop.add(Product5)

console.log(shop);

for (const product of shop) {
    console.log(product);
}