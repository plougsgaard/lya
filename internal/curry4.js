var curry1 = require('./curry1')
var curry2 = require('./curry2')
var curry3 = require('./curry3')

function curry4 (fn) {
  return function (a, b, c, d) {
    switch (arguments.length) {
      case 0: return fn
      case 1: return curry3(function (_b, _c, _d) {
        return fn(a, _b, _c, _d)
      })
      case 2: return curry2(function (_c, _d) {
        return fn(a, b, _c, _d)
      })
      case 3: return curry1(function (_d) {
        return fn(a, b, c, _d)
      })
      case 4:
      default: return fn(a, b, c, d)
    }
  }
}

module.exports = curry4
