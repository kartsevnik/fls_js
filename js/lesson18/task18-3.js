// ====================================================================================================================== //
// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.
// ====================================================================================================================== //
let now = new Date();
let nowMonth = now.getMonth() + 1
let nowYear = now.getFullYear()


function age() {
    let usersYear = document.getElementById(`usersYear`).value

    var data = usersYear.split(`-`)
    year = +data[0]
    month = +data[1]

    let resultYear = nowYear - year
    let resultMonth = nowMonth - month

    if (resultMonth < 0) {
        resultYear--
    }

    let exportResult = document.getElementById(`result`).value = resultYear
}



// ====================================================================================================================== //


// ====================================================================================================================== //

