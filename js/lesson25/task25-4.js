// Задача 4. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних

const destination = document.getElementById("result");
const description = document.createElement("p");
const image = document.createElement("div");

description.innerText = "This random dog is loaded through Fetch, from the site dog.ceo";
description.style.fontSize = "35px";
destination.append(description);
destination.append(image);

fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        image.innerHTML = `<img src="${data.message}">`;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

