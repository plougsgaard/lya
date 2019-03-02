function callWhenString (predicate, arity, defaultValue) {
  return function () {
    var string = arguments[arity - 1]
    if (typeof string !== 'string') {
      return defaultValue || string
    }
    switch (arity) {
      case 1: return predicate.call(arguments[0])
      case 2: return predicate.call(arguments[1], arguments[0])
      case 3: return predicate.call(arguments[2], arguments[0], arguments[1])
      default: throw new Error('Internal function `callWhenString` used improperly.')
    }
  }
}

module.exports = callWhenString
