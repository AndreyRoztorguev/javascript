var Module =
  Module ||
  (function (MathUtilities) {
    // private api
    const MAX_LENGTH = 100;
    function doubleMaxLength() {
      console.log(MAX_LENGTH * 2);
    }
    function print() {
      if (MathUtilities.isGreaterThan10(MAX_LENGTH)) {
        console.log("Greater");
        return;
      }
      console.log("Less");
    }

    // public api
    return {
      MAX_LENGTH: MAX_LENGTH,
      doubleMaxLength: doubleMaxLength,
      print,
    };
  })(MathUtilities);

Module.print();
MathUtilities = null;
Module.print(); // still work because of closure
