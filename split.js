var curry2 = require('./internal/curry2')

/**
 * Split string into array by delimeter.
 *
 * This is a safe, curried version of the `String.split` function.
 *
 * @param {string} delimeter
 * @param {string} string
 * @returns {Array} array of the split string
 *
 * @example
 * split('-', '1-2-3') // => ['1', '2', '3']
 *
 * @example
 * split('-')('1-2-3') // => ['1', '2', '3']
 *
 * @since 0.1.0
 */
function split (delimeter, string) {
  return (string || '').split(delimeter)
}

module.exports = curry2(split)
