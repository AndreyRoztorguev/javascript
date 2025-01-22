function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}
Animal.prototype.eat = function (food) {
  return `${this.name} is eating ${food}`;
};

// Subclass
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Subclass
function VeganDog(name, color, age, type) {
  Dog.call(this, name, color, age);
  this.type = type;
}

VeganDog.prototype.eat = function (food) {
  if (food === "meat") {
    console.log("Cannot eat meat");
  } else {
    console.log(Dog.prototype.eat.call(this, food)); // Animal.prototype.eat
  }
};

const veganDog1 = new VeganDog("Bobik", "gray", 2, "husky");
veganDog1.eat("meat"); // Cannot eat meat
veganDog1.eat("salad"); // Bobik is eating salad
