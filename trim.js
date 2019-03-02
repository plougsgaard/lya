var callWhenString = require('./internal/callWhenString')

/**
 * Trim string by removing whitespace from left and right.
 *
 * @function
 *
 * @param {string} string - string to trim
 * @returns {string} String with whitespace removed from left and right
 *
 * @see https://mdn.io/trim
 *
 * @example
 * trim(' a ') // => 'a'
 *
 * @since 0.4.0
 */
var trim = callWhenString(String.prototype.trim, 1)

module.exports = trim
