//мінімум
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get seeRadius() {
        return `${this.radius}`;
    }

    set seeRadius(seeRadius) {
        [this.radius] = seeRadius;
    }

    get seeDiameter() {
        return this.radius * 2;
    }

    calcArea() {
        let circleArea = (this.radius * this.radius) * Math.PI;
        console.log(Math.floor(circleArea));
    }

    calcCircum() {
        let circleCircum = (Math.PI * 2) * this.radius;
        console.log(Math.floor(circleCircum));
    }
}

const myCircle = new Circle(5);
myCircle.calcArea();
myCircle.calcCircum();

//норма
class Marker {
    constructor(color, inkQuant) {
        this.color = color;
        this.inkQuant = inkQuant + "%";
    }

    writing() {
        let writtenText = prompt("Let's try to empty our marker");
        inkAm = parseInt(this.inkQuant);
        let noSpaces = writtenText.match(/[a-zA-Z]/g).length;
        let inkSpent = noSpaces * 0.5;
        inkLeft = inkAm - inkSpent;

        if (inkLeft > 0) {
            alert("You have " + inkLeft + "% of ink left.");
        } else {
            alert("You have no ink left");
        }
    }    
}
