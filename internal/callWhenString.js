function callWhenString (predicate, arity, defaultValue) {
  return function () {
    var string = arguments[arity - 1]
    if (typeof string !== 'string') {
      return defaultValue || string
    }
    if (arity === 1) {
      return predicate.call(arguments[0])
    } else if (arity === 2) {
      return predicate.call(arguments[1], arguments[0])
    } else if (arity === 3) {
      return predicate.call(arguments[2], arguments[0], arguments[1])
    } else {
      return defaultValue
    }
  }
}

module.exports = callWhenString
