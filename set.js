var update = require('./update')

/**
 * Set path of object to value returning the copy
 *
 * @function
 *
 * @param {(Array|string)} path - path to set
 * @param {*} value - value to set at path
 * @param {Object} object - object to set value in
 * @returns {Object} Returns copy of `object` with `value` set at `path`
 *
 * @example
 * set('a.b', 2, { a: { b: 1 } }) // => { a: { b: 2 } }
 *
 * @since 0.2.0
 */
var set = update

module.exports = set
