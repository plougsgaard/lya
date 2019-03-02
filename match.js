var callWhenString = require('./internal/callWhenString')

/**
 * Get result of matching `string` against `regexp`
 *
 * @function
 *
 * @param {RegExp} regexp - regular expression
 * @param {string} string
 * @returns {Array} Returns array of matches
 *
 * @see https://mdn.io/match
 *
 * @example
 * match(/foo/g, 'foobarfoo') // => ['foo', 'foo']
 *
 * @since 0.5.0
 */
var match = callWhenString(String.prototype.match, 2)

module.exports = match
