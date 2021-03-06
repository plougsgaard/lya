var nth = require('./nth')

/**
 * Gets first element of array.
 *
 * @function
 *
 * @param {Array} array - array to get first element from
 * @returns {*} Returns first element of `array`
 *
 * @example
 * first([1, 2, 3]) // => 1
 *
 * @since 0.3.0
 */
var first = nth(0)

module.exports = first
