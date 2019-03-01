var replace = require('./replace')

/**
 * Trim string by removing whitespace from right.
 *
 * @function
 *
 * @param {string} string - string to trim
 * @returns {string} Returns `string` with whitespace removed from right
 *
 * @example
 * trim(' a ') // => ' a'
 *
 * @since 0.4.0
 */
var trimRight = replace(/\s+$/, '')

module.exports = trimRight
