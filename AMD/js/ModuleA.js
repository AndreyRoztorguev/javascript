define("ModuleA", ["ModuleB", "ModuleC"], function (ModuleB, ModuleC) {
  const privateVar = "private";

  function privateFunction() {
    console.log("privateFunction called");
    console.log("privateVar:", privateVar);
  }

  function printUserAgent() {
    console.log(ModuleB.getUserAgentInfo());
  }

  return {
    publicVar: "public",
    printUserAgent,
    publicFunction: function () {
      console.log("publicFunction called");
      privateFunction();
      printUserAgent();
      ModuleC.printHelloWorld();
    },
  };
});
