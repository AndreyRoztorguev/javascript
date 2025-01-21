// import is asynchronous
// it's important write file extension
import moduleA from "./ModuleA.js";

moduleA.printA();
async function loadModuleDynamic() {
  for (let index = 0; index < 5; index++) {
    if (index === 3) {
      // Dynamically import the module when index is 3
      const moduleB = (await import("./ModuleB.js")).default;

      moduleB.printB();
    }
    console.log(index);
  }
}
loadModuleDynamic();
