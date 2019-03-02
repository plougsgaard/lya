var callWhenString = require('./internal/callWhenString')

/**
 * Converts string to upper case.
 *
 * @function
 *
 * @param {string} string
 * @returns {string} Returns `string` converted to upper case
 *
 * @see https://mdn.io/toUpperCase
 *
 * @example
 * toUpperCase('aAbBcC') // => 'aabbcc'
 *
 * @since 0.5.0
 */
var toUpperCase = callWhenString(String.prototype.toUpperCase, 1)

module.exports = toUpperCase
