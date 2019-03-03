var curry2 = require('./internal/curry2')
var substring = require('./substring')

/**
 * Checks if string starts with searchString
 *
 * @function
 *
 * @param {string} searchString - Substring to search for
 * @param {string} string - String to check
 * @returns {boolean} Returns `true` if `string` starts with `searchString`, false otherwise
 *
 * @see https://mdn.io/startsWith
 *
 * @example
 * startsWith('abc', 'abcdefg') // => true
 *
 * @since 0.5.0
 */
function startsWith (searchString, string) {
  if (typeof searchString !== 'string' || typeof string !== 'string') {
    return false
  }
  return substring(0, searchString.length, string) === searchString
}

module.exports = curry2(startsWith)
