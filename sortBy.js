var curry2 = require('./internal/curry2')
var clone = require('./clone')
var makeIteratee = require('./internal/iteratee')

function makeCompareTo (iteratee) {
  iteratee = makeIteratee(iteratee)
  return function (a, b) {
    if (iteratee(a) > iteratee(b)) {
      return 1
    } else if (iteratee(a) === iteratee(b)) {
      return 0
    } else {
      return -1
    }
  }
}

/**
 * Sort (stably) array according to iteratee.
 *
 * @param {string|Function} iteratee
 * @param {Array} array
 * @returns {Array} Sorted array
 *
 * @example
 * sortBy(_.identity, ['c', 'a', 'b']) // => ['a', 'b', 'c']
 *
 * @example
 * sortBy('a', [{ a: 1 }, { a: 9 }, { a: 5 }]) // => [{ a: 1 }, { a: 5 }, { a: 9 }]
 *
 * @since 0.3.0
 */
function sortBy (iteratee, array) {
  if (!Array.isArray(array)) {
    return array
  }
  return clone(array).sort(makeCompareTo(iteratee))
}

module.exports = curry2(sortBy)
