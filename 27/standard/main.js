// норма №1
let numPal = prompt('Give me a five-digit number');

switch (true) {

    case (numPal.charAt(0) == numPal.charAt(2) || numPal.charAt(4)):
        alert("It's a palindrome!");
    break;

    case (numPal.charAt(0) != numPal.charAt(2) || numPal.charAt(4)):
        alert("It's not a palindrome!");
    break;

    default: prompt('Give me a five-digit number');

}


// норма №2
let price = +prompt('Give me a price of an item');

switch (true) {

    case (price >= 200 && price <= 300):
        alert('The amount you have to pay is' + ' ' + (price - (price*0.03)));
    break;

    case (price >= 301 && price <= 500):
        alert('The amount you have to pay is' + ' ' + (price - (price*0.05)));
    break;

    case (price > 501):
        alert('The amount you have to pay is' + ' ' + (price - (price*0.07)));
    break;

    default: alert('The amount you have to pay is' + ' ' + price);
}


// норма №3
alert("You gave me" + " " + positiveNumCount + " " + "of positive numbers, and" + " " + negativeNumCount + " " + "of negative numbers, and" + " " + zeroCount + " " + "of zeros. Out of there numbers" + " " + evenNumCount + " " + "are even numbers and" + " " + oddNumCount + " " + "are odd numbers.");

let positiveNumCount = 0;
let negativeNumCount = 0;
let zeroCount = 0;
let oddNumCount = 0;
let evenNumCount = 0;

for(let i = 0; i < 10; i++) {

    let numX = prompt("Give me a number");

    if (numX > 0) {
        positiveNumCount +=1;
    }

    else if (numX < 0) {
        negativeNumCount +=1;
    }

    else if (numX == 0) {
        zeroCount +=1;
    }

    else if (numX%2 == 0) {
        evenNumCount +=1;
    }

    else (numX%2 != 0); {
        oddNumCount +=1;
    }

}

alert("You gave me" + " " + positiveNumCount + " " + "of positive numbers, and" + " " + negativeNumCount + " " + "of negative numbers, and" + " " + zeroCount + " " + "of zeros. Out of there numbers" + " " + evenNumCount + " " + "are even numbers and" + " " + oddNumCount + " " + "are odd numbers.");
     

// норма №4
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < 7; ++i) {

    confirm(week[i] + ". Do you want to see another day?");

    if (i == 6) {
        i = -1;
    }

}
