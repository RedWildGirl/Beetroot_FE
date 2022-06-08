//минимум
let myCar = {
    carMaker: null,
    carModel: null,
    carYear: null,
    averageSpeed: null,
    fuelTank: null,
    fuelConsumption: null,
    driver: null
};

for (const key in myCar) {
    myCar[key] = prompt(`Enter ${key}`);
}

function carDeclaration() {
    console.log("My car info: ", myCar);
}

carDeclaration();

function addDriver() {
    myCar.driver2 = prompt("Enter another driver's name");
}

addDriver();

let currFuel = +prompt("What is the current amount of fuel in your tank?");

function calcFuel() {
    if (currFuel < myCar.fuelTank) {
        fuelNeeded = myCar.fuelTank - currFuel;
        alert("You need to buy" + " " + fuelNeeded + " " + "liters of gas");
    }

    else {
        alert("You don't need fuel");
    }    
}

calcFuel();

function calcTime() {
    let distance = +prompt("What distance do you want to cover?");
    let hoursNeeded = distance / myCar.averageSpeed;
    let kmLeft = (currFuel / myCar.fuelConsumption) * 100;
    let kmDiff = distance - kmLeft;
    let fuelNeeded = (kmDiff / 100) * myCar.fuelConsumption;


    if (kmLeft < distance) {
        alert("You don't have enough fuel to cover such distance. Please buy" + " " + fuelNeeded + " " + "liters of gas.");
    }

    else {

        switch (true) {

            case (distance%myCar.averageSpeed == 0):
                alert("You need" + " " + hoursNeeded + " " + "hours.");
            break;

            case (hoursNeeded < 4):
                alert("You need" + " " + hoursNeeded + " " + "hours.");
            break;

            case (hoursNeeded > 4):
                alert("You need more than 4 hours. Please remember to make a stop every 4 hours.");
            break;

            default: ;
        }

    }

}

calcTime();

//норма
let todayTime = new Date();
let timeToPlay = {
    hours: todayTime.getHours(),
    minutes: todayTime.getMinutes(),
    seconds: todayTime.getSeconds()
};

function fullTime() {
    console.log("Time", timeToPlay);
}
fullTime();

function playWithHours() {
    let addHours = +prompt("How many hours do you want to add?");
    newHours = addHours+timeToPlay.hours;

    switch (true) {
        case (addHours < 24 && newHours <= 24):
            alert("The time now is:" + " " + newHours + ":" + timeToPlay.minutes + ":" + timeToPlay.seconds);
        break;
        
        case (addHours < 24 && newHours > 24):
            alert("The time now is:" + " " + (newHours-24) + ":" + timeToPlay.minutes + ":" + timeToPlay.seconds);
        break;

        case (addHours > 24 && newHours > 24):
            restHours = addHours%24;
            alert("The time now is:" + " " + restHours + ":" + timeToPlay.minutes + ":" + timeToPlay.seconds);
        break;

        default: ;
    }
}
playWithHours();

function playWithMinutes() {
    let addMinutes = +prompt("How many minutes do you want to add?");
    newMinutes = addMinutes+timeToPlay.minutes;

    switch (true) {
        case (addMinutes < 60 && newMinutes <= 59):
            alert("The time now is:" + " " + timeToPlay.hours + ":" + newMinutes + ":" + timeToPlay.seconds);
        break;

        case (addMinutes < 60 && newMinutes > 60):

            if (hoursNew > 24) {
                alert("The time now is: 01:" + (60 - newMinutes) + ":" + timeToPlay.seconds);
            }

            else {
                alert("The time now is:" + " " + (timeToPlay.hours + 1) + ":" + (60 - newMinutes) + ":" + timeToPlay.seconds);
            }
        break;
        
        default: ;
    }
}
playWithMinutes();
