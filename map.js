var curry2 = require('./internal/curry2')
var makeIteratee = require('./internal/iteratee')

/**
 * Map over array calling iteratee on each value.
 *
 * @param {String|Function} iteratee
 * @param {Array} array
 * @returns {Array}
 *
 * @example
 * map(x => x + 1, [1, 2, 3]) // => [2, 3, 4]
 *
 * @example
 * map('x', [{ x: 1 }, { x: 2, y: 3 }]) // => [1, 2]
 *
 * @since 0.1.0
 */
function map (iteratee, array) {
  var idx = -1
  var length = Array.isArray(array) ? array.length : 0
  var result = new Array(length)

  iteratee = makeIteratee(iteratee)
  while (++idx < length) {
    result[idx] = iteratee(array[idx], idx, array)
  }

  return result
}

module.exports = curry2(map)
