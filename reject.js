var curry2 = require('./internal/curry2')
var makeIteratee = require('./internal/iteratee')
var negate = require('./negate')

/**
 * Rejects elements of array by running each though iteratee.
 *
 * @param {string|Function} iteratee
 * @param {Array} array
 * @returns {Array}
 *
 * @example
 * reject('a', [{ a: true }, { a: false }]) // => [{ a: false }]
 *
 * @example
 * reject(v => v > 0)([-1, 0, 1, 2]) // => [-1, 0]
 *
 * @since 0.3.0
 */
function reject (iteratee, array) {
  if (!Array.isArray(array)) {
    return array
  }
  iteratee = negate(makeIteratee(iteratee))
  return array.filter(iteratee)
}

module.exports = curry2(reject)
