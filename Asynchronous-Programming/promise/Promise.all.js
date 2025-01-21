// const promise1 = new Promise((resolve) => resolve("resolve: promise1"));
// const promise2 = new Promise((_, reject) => reject("reject: promise2"));
// const promise3 = new Promise((resolve) => resolve("resolve: promise3"));

// this is equivalent to above code
const promise1 = Promise.resolve("resolve: promise1");
const promise2 = Promise.reject("reject: promise2");
const promise3 = Promise.resolve("resolve: promise3");

Promise.all([promise1, promise3])
  .then((result) => {
    console.log("Fulfilled: ", result);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log("Fulfilled: ", result);
  })
  .catch((err) => {
    console.log("Rejected: ", err);
  });
