function callWhenString (predicate, arity, defaultValue) {
  return function () {
    var string = arguments[arity - 1]
    if (typeof string !== 'string') {
      return defaultValue !== undefined ? defaultValue : string
    }
    switch (arity) {
      case 1: return predicate.call(string)
      case 2: return predicate.call(string, arguments[0])
      case 3: return predicate.call(string, arguments[0], arguments[1])
      default: throw new Error('Internal function `callWhenString` used improperly.')
    }
  }
}

module.exports = callWhenString
