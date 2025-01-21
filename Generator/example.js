function* counter() {
  let counter = 0;
  while (true) {
    // The restart variable receives the value that was passed as a parameter to the call of next()
    const restartIndex = yield counter++;
    if (restartIndex === counter) {
      console.log("restartIndex:", restartIndex);
      counter = 0;
    }
  }
}

const generator = counter();

console.log(generator.next()); // 0
console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next(3)); // restart: 3  value: 0
console.log(generator.next()); // 1
console.log(generator.next()); // 2
