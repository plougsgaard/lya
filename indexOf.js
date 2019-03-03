var curry2 = require('./internal/curry2')

/**
 * Search for index of value in array or string.
 *
 * @param {string|*} value - value to search for
 * @param {Array|string} array - string or array to search in
 * @returns {integer} Returns index of value in array or string, -1 if not found
 *
 * @see https://mdn.io/indexOf
 *
 * @example
 * indexOf(3, [1, 2, 3]) // => 2
 *
 * @example
 * indexOf('c', 'abc') // => 2
 *
 * @example
 * indexOf('d', 'abc') // => -1
 *
 * @since 0.5.0
 */
function indexOf (value, array) {
  if (Array.isArray(array) || typeof array === 'string') {
    return array.indexOf(value)
  } else {
    return -1
  }
}

module.exports = curry2(indexOf)
