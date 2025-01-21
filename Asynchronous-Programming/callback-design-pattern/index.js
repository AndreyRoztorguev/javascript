// callback function or callback handler or just callback

function asyncFunction(callback) {
  console.log("Prior to callback");
  callback();
  console.log("After callback");
}

function callback() {
  console.log("Calling callback");
}

asyncFunction(callback);
