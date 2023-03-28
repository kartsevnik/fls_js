// ====================================================================================================================== //
// Задача 3.
// 1) Загальну вартість(нові ціни - price)
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
// 3) Товари, які доступні (sell_status:"available")
// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)

// ====================================================================================================================== //
let dataList = [
    {
        "id": 344277463,
        "old_price": 1395,
        "old_usd_price": "37.70",
        "price": 1099,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "29.70",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 363766641,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 90,
        "min_month_price": 0,
        "sell_status": "unavailable",
        "status": "active",
        "usd_price": "2.43",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 339273715,
        "old_price": 38,
        "old_usd_price": "1.03",
        "price": 25,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "0.68",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 330746665,
        "old_price": 3087,
        "old_usd_price": "83.43",
        "price": 2548,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "68.86",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 344972806,
        "old_price": 699,
        "old_usd_price": "18.89",
        "price": 549,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "14.84",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 318302299,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 8500,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "229.73",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 361430565,
        "old_price": 3500,
        "old_usd_price": "94.59",
        "price": 1999,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "54.03",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 14429030,
        "old_price": 3339,
        "old_usd_price": "90.24",
        "price": 2999,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "81.05",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 56340912,
        "old_price": 2094,
        "old_usd_price": "56.59",
        "price": 1776,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "48.00",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 315292225,
        "old_price": 1799,
        "old_usd_price": "48.62",
        "price": 1499,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "40.51",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 28437961,
        "old_price": 42999,
        "old_usd_price": "1162.14",
        "price": 33999,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "918.89",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 339896833,
        "old_price": 6399,
        "old_usd_price": "172.95",
        "price": 5899,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "159.43",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 364354149,
        "old_price": 1600,
        "old_usd_price": "43.24",
        "price": 1500,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "40.54",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": {
            "id": 106,
            "discount_price": 1300,
            "title": "ціна по промокоду діє з 22.03 по 28.03",
            "price_show_in_site_id": 5151,
            "show_in_details": 1,
            "show_in_catalog": 1,
            "is_description": 1,
            "promo_code": "",
            "url_for_image": "https://rozetka.com.ua/ua/promo/allgalaxies/",
            "images": "",
            "images_mobile": "",
            "hide_price": 0
        }
    }, {
        "id": 363184995,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 4499,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "121.59",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 98077846,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 3113,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "84.14",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 310694668,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 3000,
        "min_month_price": 0,
        "sell_status": "unavailable",
        "status": "active",
        "usd_price": "81.08",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 362812029,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 21700,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "586.49",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 361422708,
        "old_price": 4100,
        "old_usd_price": "110.81",
        "price": 2699,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "72.95",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 318302257,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 8500,
        "min_month_price": 0,
        "sell_status": "unavailable",
        "status": "active",
        "usd_price": "229.73",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 310694498,
        "old_price": 0,
        "old_usd_price": "0.00",
        "price": 2963,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "80.08",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 363651273,
        "old_price": 5199,
        "old_usd_price": "140.51",
        "price": 4890,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "132.16",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 330747022,
        "old_price": 3087,
        "old_usd_price": "83.43",
        "price": 2606,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "70.43",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 362617635,
        "old_price": 4872,
        "old_usd_price": "131.68",
        "price": 2436,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "65.84",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }, {
        "id": 363614439,
        "old_price": 5199,
        "old_usd_price": "140.51",
        "price": 4890,
        "min_month_price": 0,
        "sell_status": "available",
        "status": "active",
        "usd_price": "132.16",
        "pl_charge_pcs": 0,
        "pl_use_instant_bonus": false,
        "pl_premium_bonus_charge_pcs": 0,
        "rests": -1,
        "min_price": 0,
        "max_price": 0,
        "has_shops": false,
        "info": null,
        "show_in_site": null
    }]

//1 Загальну вартість (нові ціни - price)
let totalSumOfPrices = dataList.reduce((preSum, product) => preSum += product.price, 0)
console.log(`1. Total cost: ${totalSumOfPrices}`);

//2 Знайти кількість товарів, у яких ціна зменшилась (price < old_price)
let getQuantityProductsLessOldPrice = dataList.reduce((preSum, product) => product.price < product.old_price ? preSum += 1 : preSum, 0)
console.log(`2. Find the number of goods in which the price has decreased: ${getQuantityProductsLessOldPrice}`);

//3 Товари, які доступні (sell_status:"available")
// На выходе объект
let getAvailableProductsObject = dataList.filter(product => product.sell_status == "available");
console.log(`3. Goods that are available:`);
console.log(getAvailableProductsObject);


let newArrForProducts = JSON.parse(JSON.stringify(dataList))
// На выходе массив
const getAvailableProductsArr = newArrForProducts.map((product) => product.sell_status = "available" ? product.id : false);
console.log(getAvailableProductsArr);

// На выходе строка
let getAvailableProductsString = newArrForProducts.reduce((preSum, product) => product.sell_status = "available" ? preSum += product.id + `, ` : preSum, [])
console.log(`3. Goods that are available: ${getAvailableProductsString}`);



//4 сформувати новий список об'єктів тільки доступних  для продажу товарів, які міститимуть тільки:
// ідентифікатор товару(id),
// нову ціну(price),
// стару ціну(old_price),
// ціну у доларах(usd_price)

// let getProductsForSale = dataList.filter(product => product.price);
function getProductsForSale(nameArray) {
    let result = []

    for (let i = 0; i < nameArray.length; i++) {
        let tempObject = []
        if (nameArray[i].sell_status === 'available') {
            tempObject.push(
                ['id', nameArray[i]["id"]],
                ['price', nameArray[i]["price"]],
                ['old_price', nameArray[i]["old_price"]],
                ['usd_price', nameArray[i]["usd_price"]])
            tempObject = Object.fromEntries(tempObject)
            result.push(tempObject)
        }
    }
    return result
}

console.log(`4. List of objects only available for sale of goods:`)

let productsForSale = getProductsForSale(dataList)
console.log(productsForSale);

//Через for of

let tempArray = []
for (const product of dataList) {
    if (product.sell_status === 'available') {
        tempArray.push
            ({
                'id': product.id,
                'price': product.price,
                'old_price': product.old_price,
                'usd_price': product.usd_price,
            })
    }
}

console.log(tempArray);
// ====================================================================================================================== //
