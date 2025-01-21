const obj = {
  users: ["John", "Alex", "Jack", "Olivia", "Anna", "Angelina"],
};

obj[Symbol.iterator] = function () {
  const array = this.users;
  let index = 0;

  function next() {
    if (index < 0 || index >= array.length) return { done: true };
    return { done: false, value: array[index++] };
  }

  return {
    next,
  };
};

for (const el of obj) {
  console.log(el);
}
