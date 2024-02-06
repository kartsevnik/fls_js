// Задача 2. Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
// 0504546626   🡪  +380-50-45-466-26

const telNumber = "0504546626"

function replacer(match, p1, p2, p3, p4, p5, offset, string) {
    let defis = [p1, p2, p3, p4, p5].join('-')
    let res = `+38${defis}`
    return res
}
var newTelNumber = telNumber.replace(/(\d{1})(\d{2})(\d{2})(\d{3})(\d{2})/, replacer)
console.log(newTelNumber);
