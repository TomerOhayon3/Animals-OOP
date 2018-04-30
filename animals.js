class Animal {
    constructor(name, weight, energyLevel) {
        this.name = name;
        this.weight = weight;
        this.foodAmount = 5;
        this.energyLevel = energyLevel;
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
let billy = new Animal('Billy', 500,100);
let jeffrey = new Animal("Jeffrey", 100,100);
console.log("Hello " + billy.name);
billy.eat();
billy.play();