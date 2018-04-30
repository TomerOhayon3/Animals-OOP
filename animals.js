class Animal {
    var foodAmount =5;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

greet() {
    console.log("Hello, I'm " + this.name);
  }

}