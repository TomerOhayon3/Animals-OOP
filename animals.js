class Animal {
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        }

        else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }

    get weight() {
        console.log(_name+ " weight accessed");
        return this.weight;
    }

    set weight(weight) {
        if (weight > 0) {
            this._weight = weight;
        }

        else {
            console.log("Error: provided weight must be above 0 kg");
        }
    }
    constructor(name, weight, energyLevel) {
        this.name = name;
        this.weight = weight;

        this.energyLevel = energyLevel;
        this.bodyTemperature;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }
}

class Mammals extends Animal {
    constructor(name, weight, energyLevel) {
        super(name, weight, energyLevel);
        this.bodyTemperature = 35;
    }
}


class Elephant extends Mammals {
    constructor(name, weight, energyLevel, trunkLength) {
        super(name, weight, energyLevel);
        this.trunkLength = trunkLength;
        this.energyLevel = energyLevel;
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
    set weight(weight) {
        if (weight < 100) {
            this._weight = weight;
        }

        else {
            console.log("Error:  No fish can weigh over 100 kgs!");
        }
    }
    eat() {
        this.energyLevel += 2 * this.foodAmount;
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
let lion = new Mammals("Simba", 350, 250);
