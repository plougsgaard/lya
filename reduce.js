const curry3 = require('./internal/curry3')

/**
 * Reduces array into a new value.
 * It calls the iteratee with each element in the array, providing the result as the accumulator in the following iteration.
 *
 * @param {Function} iteratee
 * @param {*} accumulator
 * @param {Array} array
 * @returns {*}
 *
 * @example
 * reduce(
 *   (acc, current) => acc + current, // sum function
 *   0,
 *   [1, 2, 3]
 * ) // => 6
 *
 * @since 0.1.0
 */
function reduce (iteratee, accumulator, array) {
  let idx = -1
  const length = Array.isArray(array) ? array.length : 0

  while (++idx < length) {
    accumulator = iteratee(accumulator, array[idx], idx, array)
  }

  return accumulator
}

module.exports = curry3(reduce)
