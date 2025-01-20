require.config({
  baseUrl: "js", // Adjust to the location of your modules
});

require(["ModuleA"], function (ModuleA) {
  ModuleA.publicFunction();
});
