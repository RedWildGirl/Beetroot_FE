// мінімум №1
// function sum(a, b) {
//     return a + b;
// }

// let sum = function calc(a, b) {
//     return a + b;
// };

// let sum = (a, b) => a + b;
// console.log(sum);

// мінімум №2
function numOfArgumnts() {
    console.log(arguments.length);
}

numOfArgumnts(7, 5, 4, 78);

// мінімум №3
let a = prompt("Give me one number");
let b = prompt("Give me another number");

function compare(a, b) {

    switch (true) {

        case (a < b):
            alert("-1");
        break;

        case (a > b):
            alert("1");
        break;

        case (a = b):
            alert("0");
        break;

        default: ;

    }

}

alert(compare(a, b));

// мінімум №4
let x = prompt("Give me a number");

function factorial(x) {

    if (x === 0 || x === 1) {
        return 1;
    }

    else {

        for (i = x - 1; i >= 1; i--) {
            x = x * i;
        }

    } 

    return x;

}

alert(factorial(x));

// мінімум №5
let c = prompt("Give me first number");
let d = prompt("Give me second number");
let e = prompt("Give me third number");

function stringSum(c, d, e) {
    return c.toString() + d.toString() + e.toString();
}

alert(stringSum(c, d, e));


// мінімум №6
let sideA = +prompt("Give me the length of a rectangle side A");
let sideB = +prompt("Give me the length of a rectangle side B");
let rectArea;

function area(sideA, sideB) {

    switch (true) {

        case (sideA == 0):
            rectArea = sideB * sideB;
        break;

        case (sideB == 0):
            rectArea = sideA * sideA;
        break;

        default: rectArea = sideA * sideB;

    }

    return rectArea;

}

alert(area(sideA, sideB));
