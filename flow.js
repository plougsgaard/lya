var slice = require('./slice')

function threadValue (fns, initial) {
  var idx = -1
  var result = initial
  if (Array.isArray(fns[0])) {
    fns = fns[0]
  }
  while (++idx < fns.length) {
    result = fns[idx](result)
  }
  return result
}

function threadValueCurried (fns) {
  return function (initial) {
    return threadValue(fns, initial)
  }
}

/**
 * Threads a value through a series of functions.
 * If the last argument is not a function, it's applied as the value.
 *
 * @param {...Function} predicates - Functions to apply (left to right)
 * @param {*} value
 * @returns {*} Returns value run though all the functions
 *
 * @example
 * flow(x => x + 1, 1) // => 2
 *
 * @example
 * flow(x => x + 1)(1) // => 2
 *
 * @example
 * flow(x => x + 1, x => x + 1, 1) // => 3
 *
 * @since 0.1.0
 */
function flow () {
  var last = arguments[arguments.length - 1]
  if (typeof last === 'function' || arguments.length === 1) {
    return threadValueCurried(arguments)
  } else {
    return threadValue(slice(0, -1, arguments), last)
  }
}

module.exports = flow
