const curry1 = require('./curry1')
const curry2 = require('./curry2')

function curry3 (fn) {
  return function (a, b, c) {
    switch (arguments.length) {
      case 0: return fn
      case 1: return curry2(function (_b, _c) {
        return fn(a, _b, _c)
      })
      case 2: return curry1(function (_c) {
        return fn(a, b, _c)
      })
      case 3:
      default: return fn(a, b, c)
    }
  }
}

module.exports = curry3
