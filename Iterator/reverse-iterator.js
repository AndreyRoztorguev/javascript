function reverseArrayIterator(array) {
  let index = array.length - 1;
  function next() {
    if (index < 0) return { done: true, value: undefined };
    if (index >= array.length) {
      return { value: undefined, done: true };
    }
    return { value: array[index--], done: false };
  }
  return {
    next,
  };
}
const iterator = reverseArrayIterator([0, 1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
