const pi = 3.14;
const oneDollar = 32.5;
let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = (today.getMonth()) + 1;

let frstName = prompt('What is your first name?');
alert('Your first name is' + ' ' + frstName);
let yearOfBrth = prompt('Tell me your year of birth');

let fullAge = currentYear - yearOfBrth;
let age = fullAge - 1;

let monthOfBirth = prompt('I also should ask your month of birth. But please write the number of the month, not its name');
if (monthOfBirth <= currentMonth) {
    alert('So, given your year and month of birth, your age is probably' + '  ' + fullAge);
} else {
    alert('So, given your year and month of birth, your age is probably' + '  ' + age);
}
alert('OK, it is time to use math!')
let squareSide = prompt('Give me the length of a square side');

let squarePrmtr = squareSide * 4;

alert('In case you wanted to know, the square perimeter is' + ' ' + squarePrmtr);
alert('We totally should not stop with the square!');
let circleRadius = prompt('Give me a circle radius and I will show you the miracles of mathematics!');

let doubledRadius = circleRadius * circleRadius;
let circleArea = doubledRadius * pi;

alert('Do not ask me how I know it, however, I am pretty sure that circle area of a circle with' + ' ' + circleRadius + ' ' + 'is' + ' ' + circleArea);
alert('And finally I just need to count your money');
let hryvniaAmount = prompt('Be brave and tell me the hryvnia balance of your account');

let dollarAmount = hryvniaAmount / oneDollar;

alert('Wow! You are rich! You have' + ' ' + dollarAmount + ' ' + 'of dollars in your account');
