var isEmpty = require('./isEmpty')
var negate = require('./negate')

/**
 * Checks if a value is *not empty*. Inverse of `isEmpty`.
 *
 * @function
 *
 * @param {*} value - Value to check
 * @returns {boolean} Returns `true` if _not empty_, `false` if empty
 *
 * @example
 * notEmpty({}) // => false
 *
 * @example
 * notEmpty[1, 2, 3] // => true
 *
 * @example
 * notEmpty('foo') // => true
 *
 * @since 0.3.0
 */
var notEmpty = negate(isEmpty)

module.exports = notEmpty
