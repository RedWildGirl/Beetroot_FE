// мінімум №1
let age = +prompt("Give me your age");    

switch (true) {

    case (age > 1 && age <=3):
        alert("Infant");
    break;

    case (age > 4 && age <= 12):
        alert("Child");
    break;

    case (age > 13 && age <= 21):
        alert("Teenager");
    break;

    case (age > 22 && age <= 30):
        alert("Adult");
    break;

    case (age > 31 && age <= 50):
        alert("Grown-Up");
    break;

    default: ;
}


// мінімум №2
let keyNum = prompt('Give me a number from 0 to 9');

switch (true) {

    case (keyNum == 0):
        alert(keyNum + ")");
    break;

    case (keyNum == 1):
        alert(keyNum + '!');
    break;

    case (keyNum == 2):
        alert(keyNum + '@');
    break;

    case (keyNum == 3):
        alert(keyNum + '#');
    break;

    case (keyNum == 4):
        alert(keyNum + '$');
    break;

    case (keyNum == 5):
        alert(keyNum + '%');
    break;

    case (keyNum == 6):
        alert(keyNum + '^');
    break;

    case (keyNum == 7):
        alert(keyNum + '&');
    break;

    case (keyNum == 8):
        alert(keyNum + '*');
    break;

    case (keyNum == 9):
        alert(keyNum + "(");
    break;

    default: alert('You gave a wrong number');
}


// мінімум №3
let startNum = +prompt('Введіть перше число');
let endNum = +prompt('Введіть друге число');
let sum = 0;

while (startNum <= endNum) {
    sum += endNum;
    endNum ++;
 }
 

// мінімум №4
let a = prompt('Give me a number');
let b = prompt('Give me another number');
let gcd;

while (a != b) {

  if (a > b) {
    a = a - b;
  }

  else {
    b = b - a;
  }

}

gcd = a;
alert('Both these numbers are divisible by ' + gcd)


// мінімум №5
let numberN = +prompt('Give me a number');

for (let i = 2; i * 2 <= numberN; i++) {

    if (numberN % i == 0 ) {
        alert(`This number is divisible by ${i}`);
    }

}
