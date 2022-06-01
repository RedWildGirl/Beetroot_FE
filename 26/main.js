// // мінімум №1
let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum.toFixed(1));

// // мінімум №2
let c = '1';
let d = 2;
let letSum = +c + d;
console.log(letSum);

// // мінімум №3
let flashDrive = prompt('Give me a size of a flashdrive in gigabytes');
let mbDrive = flashDrive * 1024;
let filesNum = mbDrive / 820;
alert('You can store up to' + ' ' + Math.trunc(filesNum) + ' ' + 'files on the flashdrive');

// // норма №1
let moneyAmount = prompt('Tell me how much money do you have in your wallet');
let barPrice = prompt('Give me the price of one chocolate bar');
let barAmount = moneyAmount / barPrice;
let change = moneyAmount % barPrice;
alert('With your money you can buy' + ' ' + Math.trunc(barAmount) + ' ' + 'of chocolate bar(s) and still keep your' + ' ' + change + ' ' + 'UAH');

// // норма №2
let number = prompt('Give me a three-digit number');
let newNum = number / 10;
let revOne = number % 10;
let stringFirst = revOne;
let revTwo = Math.trunc(newNum) % 10;
let stringMiddle = revTwo;
revThree = Math.trunc(newNum) / 10;
let stringEnd = Math.trunc(revThree);
alert(stringFirst + '' + stringMiddle + '' + stringEnd);

// максимум №1
let bankDeposit = prompt('Give me an amount you want to deposit to the bank for two months with 5% of annual interest')
let dailyInterest = 0.05;
let monthDays = 61;
let yearDays = 365;
let annualInterest = (bankDeposit * dailyInterest * monthDays) / yearDays;
alert ('Your per annum interest for two months shall be UAH' + ' ' + annualInterest.toFixed(1));

// максимум №2
console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);
