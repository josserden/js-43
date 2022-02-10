const button = document.querySelector('.button');
const body = document.body;

button.addEventListener('click', onClick);

function onClick() {
    body.setAttribute('style', `background:${getRandomHexColor()}`);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
