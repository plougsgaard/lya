function curry1 (fn) {
  return function (a) {
    switch (arguments.length) {
      case 0: return fn
      case 1:
      default: return fn(a)
    }
  }
}

module.exports = curry1
