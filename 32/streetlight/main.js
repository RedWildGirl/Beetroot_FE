let circleRed = document.querySelector(".up");
let circleYellow = document.querySelector(".middle");
let circleGreen = document.querySelector(".down");
const btnClicker = document.querySelector(".btn");

function redOn() {
    circleRed.classList.add('red-light');
}
function redOff() {
    circleRed.classList.remove('red-light');
}

function yellowOn() {
    circleYellow.classList.add('yellow-light');
}
function yellowOff() {
    circleYellow.classList.remove('yellow-light');
}

function greenOn() {
    circleGreen.classList.add('green-light');
}
function greenOff() {
    circleGreen.classList.remove('green-light');
}

btnClicker.addEventListener('click', () => {
    switch (true) {
        case (!circleRed.classList.contains('red-light') && !circleYellow.classList.contains('yellow-light') && !circleGreen.classList.contains('green-light')):
            redOn();
        break;
        
        case (circleRed.classList.contains('red-light') && !circleYellow.classList.contains('yellow-light') && !circleGreen.classList.contains('green-light')):
            redOff();
            yellowOn();
        break;

        case (!circleRed.classList.contains('red-light') && circleYellow.classList.contains('yellow-light') && !circleGreen.classList.contains('green-light')):
            yellowOff();
            greenOn();
        break;

        case (!circleRed.classList.contains('red-light') && !circleYellow.classList.contains('yellow-light') && circleGreen.classList.contains('green-light')):
            greenOff();
            redOn();
        break;

        default: ;
    }
});
