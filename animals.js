class Animal {
    constructor(name, weight, energyLevel) {
        this.name = name;
        this.weight = weight;
        this.foodAmount = 5;
        this.energyLevel = energyLevel;
        this.bodyTemperature;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }
    play() {
        this.energyLevel -= 50;
    }
    eat(){
        this.energyLevel+=this.foodAmount;
        console.log(this.name + ' has eaten 5 units of food amount and increased his evergy level to ' + this.energyLevel)
    }
}

class Mammals extends Animal {
    constructor(name, weight, energyLevel) {
        super(name, weight, energyLevel);
        this.bodyTemperature=35;
    }
}


class Elephant extends Mammals {
    constructor(name, weight, energyLevel, trunkLength) {
        super(name, weight, energyLevel);
        this.trunkLength = trunkLength;
        this.energyLevel=energyLevel;
    }
    greet() {
        console.log("Trumpets!");
    }
}

class Fish extends Animal {
    constructor(name, weight, energyLevel) {
        super(name, weight, energyLevel);
        this.foodAmount = 1;
    }
    eat() {
        this.energyLevel+=2*this.foodAmount;
    }
    play() {
        this.energyLevel -= 3;
    }

}







// let billy = new Animal('Billy', 500,100);
// let jeffrey = new Animal("Jeffrey", 100,100);
// console.log("Hello " + billy.name);
// billy.eat();
// billy.play();
let thomas = new Elephant("Thomas", 3000, 350);
console.log("The trunk length is: " + thomas.trunkLength);
let lion = new Mammals("Simba", 350,250);
