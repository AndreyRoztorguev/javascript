function asyncFunction(callback) {
  setTimeout(() => {
    const result = Math.floor(Math.random() * 100 + 1);
    if (result > 50) {
      callback(null, result);
    } else {
      callback(new Error("Random number is less than 50"), undefined);
    }
  }, 1000);
}

function callback(err, result) {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Result:", result);
  }
}

asyncFunction(callback);
