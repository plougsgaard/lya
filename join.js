var curry2 = require('./internal/curry2')

/**
 * Joins elements of array together with separator between each.
 *
 * @param {string} separator
 * @param {Array} array
 * @returns {string} String joined together with separator
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @example
 * join('-', [1, 2, 3]) // => '1-2-3'
 *
 * @since 0.3.0
 */
function join (separator, array) {
  if (!Array.isArray(array)) {
    return ''
  }
  return array.join(separator)
}

module.exports = curry2(join)
