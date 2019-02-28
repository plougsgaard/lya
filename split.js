var curry2 = require('./internal/curry2')

/**
 * Split string into array by delimeter.
 *
 * @param {string} delimeter
 * @param {string} string
 * @returns {Array} array of the split string
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
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
