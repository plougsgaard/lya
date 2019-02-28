var isEmpty = require('./isEmpty')
var negate = require('./negate')

/**
 * Checks if a value is *not* empty.
 *
 * @function
 *
 * @param {*} value - Value to check for not being empty
 * @returns {boolean} Is `false` if empty, `true` otherwise
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
