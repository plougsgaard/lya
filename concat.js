var curry2 = require('./internal/curry2')

/**
 * Append value or array to array
 *
 * @param {*|Array} value - value or array to append to array
 * @param {*|Array} array - value or array to expand
 * @returns {Array} Returns concatenated array
 *
 * @see https://mdn.io/concat
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
