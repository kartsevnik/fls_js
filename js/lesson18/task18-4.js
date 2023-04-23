// ====================================================================================================================== //
// Задача 4. Наперед задано у скрипті масив зі списком бажань.
// Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку).
// ====================================================================================================================== //
let wishList = [`love`, `courage`, `peace`, `health`, `reliable friends`, `harmony`, `confidence`, `more sleep`];

// ====================================================================================================================== //

function randomWish(nameOfArray) {
    return nameOfArray[Math.floor(Math.random() * nameOfArray.length)]
}

let findResolve = document.querySelector(`.resolve`)

for (let i = 0; i < 3; i++) {
    let insertDiv = document.createElement('div')
    let wish1 = findResolve.append(insertDiv)
}

let findDiv = findResolve.querySelectorAll(`div`)

for (let i = 0; i < findDiv.length; i++) {
    findDiv[i].append(randomWish(wishList))
}



// ====================================================================================================================== //

