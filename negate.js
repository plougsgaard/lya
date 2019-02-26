/**
 * Negates a function.
 *
 * @param {Function} fun - Function to negate
 * @returns {Function} Function that when called, calls the original function and negates the result.
 *
 * @example
 * let notTrue = negate(() => true)
 * notTrue() // => false
 *
 * @since 0.3.0
 */
function negate (fun) {
  return function () {
    return !fun.apply(null, arguments)
  }
}

module.exports = negate
