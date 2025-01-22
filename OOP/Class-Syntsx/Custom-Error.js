class InvalidValueError extends Error {
  static colors = {
    red: "red",
    green: "green",
  };
  constructor(message, color) {
    super(message);
    this.name = "InvalidValueError";
    this.color = color;
  }
}

const err = new InvalidValueError("3", InvalidValueError.colors.red);
console.log(err.color);
