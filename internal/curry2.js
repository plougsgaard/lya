const curry1 = require('./curry1')

function curry2 (fn) {
  return function (a, b) {
    switch (arguments.length) {
      case 0: return fn
      case 1: return curry1(function (_b) {
        return fn(a, _b)
      })
      case 2:
      default: return fn(a, b)
    }
  }
}

module.exports = curry2
