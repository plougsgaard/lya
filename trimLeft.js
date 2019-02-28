var replace = require('./replace')

/**
 * Trim string by removing whitespace from left.
 *
 * @function
 *
 * @param {string} string - string to trim
 * @returns {string} String with whitespace removed from left
 *
 * @example
 * trim(' a ') // => 'a '
 *
 * @since 0.4.0
 */
var trimLeft = replace(/^\s+/, '')

module.exports = trimLeft
