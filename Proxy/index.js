// Proxy is an object
// Proxies make it possible to intercept accesses to objects.
// ES2015

const target = {
  firstName: null,
  lastName: null,
};
const handler = {
  get(target, property) {
    console.log(`Read "${target[property]}" from property "${property}"`);
    if (target[property]) {
      return target[property];
    }
    console.log("No property");
  },
  set(target, property, value) {
    console.log(`Write "${value}" to property "${property}"`);
    target[property] = value;
  },
};

const proxy = new Proxy(target, handler);

proxy.firstName = "John";
proxy.lastName = "Doe";
console.log(proxy.firstName);
console.log(proxy.lastName);
console.log("lastName" in proxy);
