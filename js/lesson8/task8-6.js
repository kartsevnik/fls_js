// Enter the required data
let productsPrices = [1000, 20, 31]
let productsName = [`cheese`, `juice`, `bread`]

let enterQuantityOfMoney = parseInt(prompt(`How much money are you have?`, `500`))

// Creating Functions
function indicateProductsPrices(prices, nameOfProducts) {
    let res = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= enterQuantityOfMoney)
            res.push(nameOfProducts[i])
    }
    return res
}

function addSpace(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = ` ` + nameArray[i]
    }
}


//Determining the result

let result = indicateProductsPrices(productsPrices, productsName)

// !!!Подскажите как правильно применить функцию с добавлением пробелов, чтобы res не был undefind, а еще лучше сразу к переменной result?
let res = addSpace(result)
console.log(res);


// Result output
document.write(`<div div class= "js-output">You can afford to buy: ${result}</div>`)
