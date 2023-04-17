// ====================================================================================================================== //
// Склад. База товарів, які зберігаються на складі:
// - назва товару,
// - одиниця виміру,
// - кількість,
// - фірма виробник(назва, реєстраційний номер).

// Організувати реєстрацію товарів,
// Організувати відвантаження товарів,
// фільтрація за назвою товару,
// фільтрація за назвою фірми
// ====================================================================================================================== //
class FirmOfProduct {
    constructor(name, registrationNumber) {
        this.name = name;
        this.registrationNumber = registrationNumber;
    }
}

class Product {
    constructor(name, unit, quantity, company) {
        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
        this.company = new FirmOfProduct(company.name, company.registrationNumber);
    }
}

let arrayOfProducts = [
    new Product("Сіль", "кг", 100, new FirmOfProduct("Fir1", "123456")),
    new Product("Радіо", "шт", 10, new FirmOfProduct("Fir2", "456564")),
    new Product("Дрони", "шт", 566, new FirmOfProduct("Fir2", "477777")),
    new Product("Цукор", "кг", 156, new FirmOfProduct("Fir3", "415642")),
]

console.log(arrayOfProducts);

class BaseOfProduct {
    constructor(initArrayOfProducts) {
        this.products = initArrayOfProducts;
    }
    // Отримати всі товари,
    getProducts() {
        return this.products;
    }
    // Зареєструвати новий товар або додати кількість існуючого товару,
    addProduct(Product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == Product.name) {
                return this.products[i].quantity += Product.quantity;
            }
        }
        this.products.push(Product);
    }

    // Організувати відвантаження товарів,
    shipmentOfProducts(name, quantity) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == name) {
                if (this.products[i].quantity >= quantity) {
                    this.products[i].quantity -= quantity;
                    console.log(`На складі залишилось ${this.products[i].quantity} ${this.products[i].unit} товарів ${name} `);
                }
                else console.log(`Недостатньо товарів для відвантаження ${name}, на складі залишилось лише ${this.products[i].quantity} ${this.products[i].unit}`);
            }
        }
    }

    // Фільтрація за назвою товару
    filteredOfProductName(productName) {
        let result = this.products.filter(product => product.name == productName);
        return result;
    }

    // Фільтрація за назвою фірми
    filteredOfCompanyName(companyName) {
        let result = this.products.filter(product => product.company.name == companyName);
        return result;
    }
}

// Створили нову базу товарів
let newBaseOfProduct = new BaseOfProduct(arrayOfProducts);

// Зареєстрували новий товар 
let newProduct1 = newBaseOfProduct.addProduct(new Product("Cari", "кг", 1000, new FirmOfProduct("Fir4", "111111")));

// Додали кількість існуючого товару
let newProduct2 = newBaseOfProduct.addProduct(new Product("Cari", "кг", 1000, new FirmOfProduct("Fir4", "111111")));

// Провели відвантаження товарів,
newBaseOfProduct.shipmentOfProducts("Радіо", 10);
newBaseOfProduct.shipmentOfProducts("Сіль", 1000);

// Фільтрація за назвою товару
let findProductCari = newBaseOfProduct.filteredOfProductName(`Cari`);
console.log(findProductCari);

// Фільтрація за назвою фірми
let findCompanyFir2 = newBaseOfProduct.filteredOfCompanyName(`Fir2`);
console.log(findCompanyFir2);

console.log(newBaseOfProduct.getProducts());

// ====================================================================================================================== //


// ====================================================================================================================== //