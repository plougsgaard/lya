var callWhenString = require('./internal/callWhenString')

/**
 * Exracts substring from startIndex to endIndex (not included).
 *
 * @function
 *
 * @param {integer} startIndex
 * @param {integer} endIndex
 * @param {string} string
 * @returns {string} Returns substring of `string`
 *
 * @see https://mdn.io/substring
 *
 * @example
 * substring(0, 2, 'abcde') // => 'ab'
 *
 * @example
 * substring(0, undefined, 'abcde') // => 'abcde'
 *
 * @since 0.5.0
 */
var substring = callWhenString(String.prototype.substring, 3)

module.exports = substring
