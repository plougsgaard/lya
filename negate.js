/**
 * Negates a function.
 *
 * @param {Function} predicate - Function to negate
 * @returns {Function} Returns function that calls the `predicate function and negates the result.
 *
 * @example
 * var notTrue = negate(() => true)
 * notTrue() // => false
 *
 * @since 0.3.0
 */
function negate (predicate) {
  return function () {
    return !predicate.apply(null, arguments)
  }
}

module.exports = negate
