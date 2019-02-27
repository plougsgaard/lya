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
 * @since 0.3.0
 */
var notEmpty = negate(isEmpty)

module.exports = notEmpty
