function asyncfunction() {
  // Promise has 3 states: pending (in process), fulfilled (resolve), rejected (reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.floor(Math.random() * 100 + 1);
      if (result > 50) {
        resolve(result);
      } else {
        reject(new Error("Random number is less than 50"));
      }
    }, 1000);
  });
}

asyncfunction()
  .then((result) => {
    console.log("Result:", result);
    return result;
  })
  .then((result) => {
    console.log("Result again:", result);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Async function finished");
  });
