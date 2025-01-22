// the class syntax is a simplification of the pseudoclassical
// object orientation (it's only syntactical sugar)

class Animal {
  //   old syntax conversion before ES2022 it "tells" you that these fields are private
  //   _name = "";
  //   _color = "";
  //   _age = 0;

  // private fields ES2022
  #name = 0;
  #color = "";
  #age = "";

  constructor(name, color, age) {
    this.#name = name;
    this.#color = color;
    this.#age = age;
  }

  eat(food) {
    console.log(`Chow chow, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toSting() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}

const animal = new Animal("John", "red", 10);
console.log(animal.toSting());

// subclass
class Dog extends Animal {
  constructor(name, color, age, type) {
    super(name, color, age);
    this.type = type;
  }
  bark() {
    console.log("Woof, woof!");
  }
}

const dog = new Dog("Buddy", "brown", 5, "Labrador");
console.log(dog.type);
