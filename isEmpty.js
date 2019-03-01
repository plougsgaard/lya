/**
 * Checks if a value is empty.
 *
 * @param {*} value - Value to check
 * @returns {boolean} Returns `true` if empty, `false` otherwise
 *
 * @example
 * isEmpty({}) // => true
 *
 * @example
 * isEmpty([]) // => true
 *
 * @example
 * isEmpty(123) // => true
 *
 * @example
 * isEmpty('') // => true
 *
 * @example
 * isEmpty('foo') // => false
 *
 * @since 0.3.0
 */
function isEmpty (value) {
  if (value === null || value === undefined || typeof value === 'number' || typeof value === 'boolean') {
    return true
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length
  }
  if (typeof value.hasOwnProperty === 'function') {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false
      }
    }
  }
  return true
}

module.exports = isEmpty
