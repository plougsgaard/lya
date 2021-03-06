/**
 * Takes a value and returns the same value.
 *
 * @param {*} value
 * @returns {*} Returns `value`
 *
 * @example
 * identity(2) // => 2
 *
 * @example
 * identity(() => 5) // => () => 5
 *
 * @since 0.1.0
 */
function identity (value) {
  return value
}

module.exports = identity
