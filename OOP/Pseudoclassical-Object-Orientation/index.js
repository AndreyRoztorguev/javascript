const obj = {};
const obj1 = Object.create(Object.prototype);

// console.log(Object.getPrototypeOf(obj1));
// console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj1)); // true equivalent to obj.__proto__ === obj1.__proto__

const obj2 = {};
// console.log(Object.getPrototypeOf(obj2).toString()); // [object Object] means [datatype ConstructorName]

const date = new Date();
const regex = /a/g;
const num = 1;
const num2 = Number(2);
const str = "string1";
const str2 = String("string2");

console.log(Object.prototype.toString.call(date)); // [object Date]
console.log(Object.prototype.toString.call(regex)); // [object RegExp]
console.log(Object.prototype.toString() === Object.toString()); // false
console.log(Object.prototype.toString.call(num)); // [object Number]
console.log(Object.prototype.toString.call(num2)); // [object Number]
console.log(Object.prototype.toString.call(str)); // [object String]
console.log(Object.prototype.toString.call(str2)); // [object String]
console.log("str" === String("str")); // true
console.log(Object.prototype.toString.call({})); // [object Object] This method returns a string representation of the object that it's called on.
console.log(String.toString()); // it returns the string representation of the String constructor
