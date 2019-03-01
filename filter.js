var curry2 = require('./internal/curry2')
var makeIteratee = require('./internal/iteratee')

/**
 * Filters array (keeps elements) by iteratee (function or path).
 *
 * @param {string|Function} iteratee - function or path to keep
 * @param {Array} array - array to filter
 * @returns {Array} Returns filtered copy of array
 *
 * @example
 * filter('a', [{ a: true }, { a: false }]) // => [{ a: true }]
 *
 * @example
 * filter(v => v > 0)([-1, 0, 1, 2]) // => [1, 2]
 *
 * @since 0.3.0
 */
function filter (iteratee, array) {
  if (!Array.isArray(array)) {
    return array
  }
  iteratee = makeIteratee(iteratee)
  return array.filter(iteratee)
}

module.exports = curry2(filter)
