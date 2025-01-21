// ES2015
// Generator allows funnction to be paused and resumed
// Generator function always returns Object Iterator
// Generator creates an Iterator automatically

function* someGenerator() {
  console.log("A"); // it calls after first call of generator.next() (yield is similar to return)
  yield 1; // generator stops here and returns the value 1
  console.log("B");
  yield 2;
  console.log("B");
  yield 3;
}

const generator = someGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
