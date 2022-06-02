// максимум №1
let down = 0;
let up = 100;
let res;

alert("Let's play a game! Think of a number from 0 to 100");

while (true) {

    res = Math.floor((up + down) / 2);
    res = Math.trunc(res);

    let check = prompt("Is your number > " + res + ", < " + res + " or = " + res + "?");

    if (check == "=") {
        alert(res);
        break;
    }

    else if (check == ">") {
        down = Math.floor((up + down) / 2);
    }

    else {
        up = Math.floor((up + down) / 2);
    }

}

// максимум №2
let numMul = 2;

do {
    for(let i = 1; i <= 10; i++) {
        let result = i * numMul;
        console.log(result);
    }
    numMul++;
}
while(numMul <= 9);


// максимум №3
alert("I'm going to ask you to give me a date");
let day = +prompt("Give me a day");
let month = +prompt("Give me a month as a number (ie, December = 12)");
let year = +prompt("Give me a year");

switch (true) {

    case (day < 29 && month == 4 || month == 6 || month == 9 || month == 11): //обычные дни до 29 числа месяцев, в которых 30 дней
        alert("The next date is" + " " + (day+1) + "-" + month + "-" + year);
    break;

    case (day < 30 && month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10): //обычные дни до 30 числа месяцев, в которых 31 дней
            alert("The next date is" + " " + (day+1) + "-" + month + "-" + year);
    break;

    case (day <= 27 && month == 2): //обычные дни до 27 февраля
        alert("The next date is" + " " + (day+1) + "-" + month + "-" + year);
    break;

    case (day === 30 && month === 4 || month === 6 || month === 9 || month === 11): //30ый день месяцев, в которых 30 дней!!!
        alert("The next date is 1-" + (month+1) + "-" + year);
    break;

    case (day == 31 && month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10):  //31ый день месяцев, в которых 31 день
        alert("The next date is 1-" + (month+1) + "-" +  year);
    break;

    case(day == 31 && month == 12): //31 декабря
        alert("The next date is 1-1-" + (year+1));
    break;

    case(day == 28 && month == 2 && year%4 != 0 && year%400 != 0): //28 февраля високосного года
        alert("The next date is 1-" + (month+1) + "-" + year);
    break;

    case(day === 29 && month === 2): //29 февраля
        alert("The next date is 1-" + (month+1) + "-" + year);
    break;

    default: alert("Wrong");

}
