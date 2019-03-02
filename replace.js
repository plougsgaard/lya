var callWhenString = require('./internal/callWhenString')
var curry3 = require('./internal/curry3')

/**
 * Replace some or all matches with replacement pattern.
 *
 * @function
 *
 * @param {RegExp|string} regexp - RegExp literal or string to replace
 * @param {string|Function} replacement - replacement pattern
 * @param {string} string - string to run replace on
 * @returns {string} Returns replaced `string`
 *
 * @see https://mdn.io/replace
 *
 * @example
 * replace(/a/i, 'b', 'a-a-a') // => 'b-a-a'
 *
 * @example
 * replace(/a/gi, 'b', 'a-a-a') // => 'b-b-b'
 *
 * @since 0.4.0
 */
var replace = callWhenString(String.prototype.replace, 3)

module.exports = curry3(replace)
