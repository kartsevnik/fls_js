// ====================================================================================================================== //
// Задача.
// Дано 10 рядків тексту «Hello!» у окремих div.
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

// Task.
// Given 10 lines of text "Hello!"in separate div.
// When one of them is clicked, all subsequent ones should be colored red.
// ====================================================================================================================== //
const textDivs = document.querySelectorAll('.textDiv');

function changeColor(event) {
    const clickedDiv = event.target;
    let shouldChangeColor = false;

    for (let i = 0; i < textDivs.length; i++) {
        if (shouldChangeColor) {
            textDivs[i].style.color = 'red';
        }

        if (textDivs[i] === clickedDiv) {
            shouldChangeColor = true;
        }
    }
}

for (let i = 0; i < textDivs.length; i++) {
    textDivs[i].addEventListener('click', changeColor);
}

// ====================================================================================================================== //

// ====================================================================================================================== //