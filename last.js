var nth = require('./nth')

/**
 * Gets last element of array.
 *
 * @function
 *
 * @param {Array} array - array to get last element from
 * @returns {*} Return last element of `array`
 *
 * @example
 * last([1, 2, 3]) // => 3
 *
 * @since 0.3.0
 */
var last = nth(-1)

module.exports = last
