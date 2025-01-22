// Superclass
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} eating`);
};
Animal.prototype.drink = function () {
  console.log(`${this.name} drinking`);
};

// Subclass
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

const dog1 = new Dog("Buldoher", "black", 4, "dog");
dog1.eat();
dog1.drink();

// Subclass
function Cat(name, color, age, breed) {
  Animal.call(this, name, color, age);
  this.breed = breed;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

const cat1 = new Cat("Whiskers", "white", 3, "Persian");

cat1.eat();
cat1.drink();
