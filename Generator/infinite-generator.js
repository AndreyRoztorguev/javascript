function* infinitCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = infinitCounter();

// increment counter as many times as needed
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // 4
console.log(counter.next().value); // 5
console.log(counter.next().value); // 6
