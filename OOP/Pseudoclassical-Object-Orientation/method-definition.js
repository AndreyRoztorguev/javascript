function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
  // Important! This way is not efficient, because every instance will have each own copy of eat method
  // Use Animal.prototype.eat() instead
  //   this.eat = function () {
  //     console.log(`eating.`);
  //   };
}
// This way all instances of Animal will use the same eat method
Animal.prototype.eat = function () {
  console.log(`eating.`);
};

const animal1 = new Animal("Felix", "brown", 10);
const animal2 = new Animal("Felix2", "yellow", 3);

console.log(animal1.eat === animal2.eat); // true
