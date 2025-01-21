// introduced in es2016

async function someAsyncFunction() {
  try {
    const asyncCalculation = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Async task completed");
        }, 1000);
      });

    const asyncCalculationRejected = () =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject("Error messgae");
        }, 1000);
      });

    const result = await asyncCalculation();
    console.log("result:", result);
    await asyncCalculationRejected(); // it invoked the .catch block

    return result;
  } catch (error) {
    console.log(error);
  }
}

someAsyncFunction();
