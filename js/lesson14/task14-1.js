// ====================================================================================================================== //
// Task 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// * назва компанії на час розробки (назву періодично змінюють)
// * власник компанії

// *спонcори (масив спонсорів):
// - прізвище спонсора
// - ім’я спонсора
// - сума вкладень спонсора

// * рік випуску
// * вартість сайту

// ====================================================================================================================== //
let listOfWorks = [
    {
        nameOfCompany: 'IT-Gaga',
        ownerOfCompany: 'Lady Gaga',

        sponsors: {
            surname: 'Willis',
            name: 'Bruce',
            investing: 101000
        },
        graduationYear: 2009,
        costOfSite: 15000
    },
    {
        nameOfCompany: 'IT-Gaga',
        ownerOfCompany: 'Lady Gaga',

        sponsors: {
            surname: 'Celentano',
            name: 'Addriano',
            investing: 5000
        },
        graduationYear: 2000,
        costOfSite: 5000
    },
    {
        nameOfCompany: 'Web and Hopkins',
        ownerOfCompany: 'Antony Hopkins',

        sponsors: {
            surname: 'Foster',
            name: 'Jody',
            investing: 35000
        },
        graduationYear: 2021,
        costOfSite: 5000
    },
    {
        nameOfCompany: 'JS and McConahi',
        ownerOfCompany: 'Matthew McConahi',

        sponsors: {
            surname: 'Farrell',
            name: 'Colin',
            investing: 70000
        },
        graduationYear: 2022,
        costOfSite: 100000
    }
]

// ====================================================================================================================== //
// Знайти:
// 1. загальну вартість усіх сайтів

let totalCostOfSites = listOfWorks.reduce((preArr, costs) => preArr + costs.costOfSite, 0)
console.log(`1. The total cost of all sites: ${totalCostOfSites}`);

// 2. кількість сайтів, що було зроблено між 2000 та 2009 рр.

let quantityOfSitesFrom2000to2009 = listOfWorks.reduce((preArr, site) =>
    (site.graduationYear >= 2000 && site.graduationYear <= 2009) ? preArr + 1 : preArr, 0)
console.log(`2. The number of sites that were produced between 2000 and 2009: ${quantityOfSitesFrom2000to2009}`);

// 3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000
let quantityOfInvestMore100k = listOfWorks.reduce((preArr, site) =>
    (site.sponsors.investing >= 100000) ? preArr + 1 : preArr, 0)
console.log(`3. The number of sites where the amount of sponsorship was more than 100000: ${quantityOfInvestMore100k}`);

// 4. створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const exportSponsors = listOfWorks.map((site) => site.sponsors);
console.log('4. Create a general list of all sponsors (while they can be repeated, just collect them all in an array):');
console.log(exportSponsors);

// 5. знайти рік, коли прибуток був найбільшим

function getSuccessfulYear(nameOfArray) {
    let result = 0
    let temp = 0
    for (const element of nameOfArray) {
        if (element.costOfSite > temp) {
            temp = element.costOfSite
            result = element.graduationYear
        }
    }
    return result
}
let successfulYear = getSuccessfulYear(listOfWorks)

console.log(`5. Find the year when the profit was the highest: ${successfulYear}`);

// 6. упорядкувати список за спаданням прибутку
let newArray = JSON.parse(JSON.stringify(listOfWorks))

newArray.sort((site1, site2) => {
    return site2.costOfSite - site1.costOfSite
})

console.log('6. Organize the list in descending order of profit:');
console.log(newArray);
// 7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
console.log('7. Create 2 separate lists with copies of objects containing sites with a value of 10000 or more 10000:');
let costsMin10000 = JSON.parse(JSON.stringify(listOfWorks))
costsMin10000 = costsMin10000.filter(site => site.costOfSite <= 10000);
console.log(costsMin10000);

let costsMore10000 = JSON.parse(JSON.stringify(listOfWorks))
costsMore10000 = listOfWorks.filter(site => site.costOfSite > 10000);
console.log(costsMore10000);


// ====================================================================================================================== //
