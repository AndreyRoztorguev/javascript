const arrayOfNumbers = [1, 2, 3, 4, 5];
const iterator = arrayOfNumbers.values();

let isDone = false;

while (!isDone) {
  const { value, done } = iterator.next();
  console.log("done:", done);
  console.log("value:", value);
  if (done) {
    isDone = true;
  }
}
