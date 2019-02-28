/**
 * Determines if a value is an object.
 * An object is something with type 'object' that isn't an array or function
 *
 * @param {*} value
 * @returns {boolean} True if `value` is an object according to Lya's definition
 *
 * @example
 * isObject({}) // => true
 *
 * @example
 * isObject(new Date()) // => true
 *
 * @example
 * isObject([1, 2, 3]) // => false
 *
 * @since 0.2.0
 */
function isObject (value) {
  return (typeof value === 'object') && value !== null && !Array.isArray(value)
}

module.exports = isObject
