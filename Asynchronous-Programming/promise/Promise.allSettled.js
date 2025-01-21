const promise1 = Promise.resolve("resolve: promise1");
const promise2 = Promise.reject("reject: promise2");
const promise3 = Promise.resolve("resolve: promise3");

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    /**
     * output:
     *  [
     *    { status: 'fulfilled', value: 'resolve: promise1' },
     *    { status: 'rejected', reason: 'reject: promise2' },
     *    { status: 'fulfilled', value: 'resolve: promise3' }
     *   ]
     */
    console.log("Fulfilled: ", result);
    throw new Error("for demonstration of .catch");
  })
  .catch((err) => {
    console.log("Rejected: ", err);
  });
