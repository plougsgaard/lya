var callWhenString = require('./internal/callWhenString')
var curry2 = require('./internal/curry2')

/**
 * Split string into array by delimeter.
 *
 * @function
 *
 * @param {string} delimeter
 * @param {string} string
 * @returns {Array} array of the split string
 *
 * @see https://mdn.io/split
 *
 * @example
 * split('-', '1-2-3') // => ['1', '2', '3']
 *
 * @example
 * split('-')('1-2-3') // => ['1', '2', '3']
 *
 * @since 0.1.0
 */
var split = callWhenString(String.prototype.split, 2, [])

module.exports = curry2(split)
