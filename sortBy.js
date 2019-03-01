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
 * Sort array using iteratee to compare elements.
 *
 * @param {string|Function} iteratee - string or function to sort by
 * @param {Array} array - array to sort
 * @returns {Array} Returns `array` sorted by `iteratee`
 *
 * @see https://mdn.io/sort
 *
 * @example
 * sortBy(identity, ['c', 'a', 'b']) // => ['a', 'b', 'c']
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
