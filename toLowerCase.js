var callWhenString = require('./internal/callWhenString')

/**
 * Converts string to lower case.
 *
 * @function
 *
 * @param {string} string
 * @returns {Array} Returns `string` converted to lower case
 *
 * @see https://mdn.io/toLowerCase
 *
 * @example
 * toLowerCase('aAbBcC') // => 'aabbcc'
 *
 * @since 0.5.0
 */
var toLowerCase = callWhenString(String.prototype.toLowerCase, 1)

module.exports = toLowerCase
