var curry2 = require('./internal/curry2')
var substring = require('./substring')

/**
 * Checks if string ends with searchString
 *
 * @function
 *
 * @param {string} searchString - Substring to search for
 * @param {string} string - String to check
 * @returns {boolean} Returns `true` if `string` ends with `searchString`, false otherwise
 *
 * @see https://mdn.io/endsWith
 *
 * @example
 * endsWith('efg', 'abcdefg') // => true
 *
 * @since 0.5.0
 */
function endsWith (searchString, string) {
  if (typeof searchString !== 'string' || typeof string !== 'string') {
    return false
  }
  return substring(string.length - searchString.length, undefined, string) === searchString
}

module.exports = curry2(endsWith)
