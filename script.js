
const strap = document.querySelectorAll('.strap');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const brown = document.querySelector('.brown');

black.addEventListener('click', () => {
    strap.forEach((element) => {
        element.style.background = " rgb(114, 112, 112)";
    });
});

red.addEventListener('click', () => {
    strap.forEach((element) => {
        element.style.background = "#D8491F";
    });
});

blue.addEventListener('click', () => {
    strap.forEach((element) => {
        element.style.background = "#555881";
    });
});

brown.addEventListener('click', () => {
    strap.forEach((element) => {
        element.style.background = "#8F5961";
    });
});
