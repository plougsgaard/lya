var curry2 = require('./internal/curry2')

/**
 * Append value or array to array, or value to string
 *
 * @param {Array|*} value - value or array to append to array or string
 * @param {Array|string} array - string or array to expand
 * @returns {Array|string} Returns concatenated array or string
 *
 * @see https://mdn.io/concat
 *
 * @example
 * concat(4, [1, 2, 3]) // => [1, 2, 3, 4]
 *
 * @example
 * concat([4, 5], [1, 2, 3]) // => [1, 2, 3, 4, 5]
 *
 * @example
 * concat('def', 'abc') // => 'abcdef'
 *
 * @example
 * concat('def', ['abc']) // => ['abc', 'def']
 *
 * @since 0.4.0
 */
function concat (value, array) {
  if (Array.isArray(array) || typeof array === 'string') {
    return array.concat(value)
  } else {
    return array
  }
}

module.exports = curry2(concat)
