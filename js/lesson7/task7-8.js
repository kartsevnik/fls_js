// Enter the required data
let enterTitle = prompt(`Enter the your title, please`, `Super link`)
let enterLink = `https://developer.mozilla.org/en-US/docs/Web/JavaScript`
let enterImage = `../../img/task7-8/javascript-logo-banner.png`




// Determining the result

function createBaner(title, link, image) {
    let result = ""
    let resTitle = `<h2>${title}</h2>`
    let resLinkAndImage = `<a href="${link}"><img src="${image}" alt=""><a>`
    result = `<div class="task-7-8">${resTitle}  ${resLinkAndImage}</div>`
    return result
}

let result = createBaner(enterTitle, enterLink, enterImage)

// Result output
document.write(`
<div class="js-output">
${result}
</div>`)