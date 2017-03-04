'use strict';

class Calculator {
  constructor () {
    this.result = 0;
    this.operator = null;
  }

  print () {
    return this.result;
  }

  ac () {
    this.result = 0;
    this.operator = null;
    return this;
  }

  sum (value) {
    this.result += value;
    return this;
  }

  sub (value) {
    this.result -= value;
    return this;
  }

  mult (value) {
    this.result *= value;
    return this;
  }

  div (value) {
    this.result /= value;
    return this;
  }
}

module.exports = function exportsCaculator() {
  return new Calculator(...arguments);
};
