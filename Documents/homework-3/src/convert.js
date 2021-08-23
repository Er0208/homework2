
class Convert {
  constructor() {
    console.log("i'm the new object");
  }
  fromCelcius(to, input) {
    if (to == "cel") {
      return input;
    }
    if (to == "rea") {
      return (4 / 5) * input;
    }
    if (to == "far") {
      return (9 / 5) * input + 32;
    }
  }
  fromReamur(to, input) {
    if (to == "rea") {
      return input;
    }
    if (to == "cel") {
      return (5 / 4) * input;
    }
    if (to == "far") {
      return (9 / 4) * input + 32;
    }
  }
  fromFarenheit(to, input) {
    if (to == "far") {
      return input;
    }
    if (to == "cel") {
      return (5 / 9) * (input - 32);
    }
    if (to == "rea") {
      return (4 / 9) * (input - 32);
    }
  }
}

module.exports = Convert ;