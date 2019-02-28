var curry2 = require('./internal/curry2')

/**
 * Concatenates value or array to array
 *
 * @param {*|Array} value - value or array to append to array
 * @param {*|Array} array - value or array to expand
 * @returns {Array} Concatenated array
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 *
 * @example
 * concat(4, [1, 2, 3]) // => [1, 2, 3, 4]
 *
 * @example
 * concat([4, 5], [1, 2, 3]) // => [1, 2, 3, 4, 5]
 *
 * @since 0.4.0
 */
function concat (value, array) {
  if (!Array.isArray(array)) {
    array = [array]
  }
  return array.concat(value)
}

module.exports = curry2(concat)
