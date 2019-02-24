/**
 * Get values of collection.
 *
 * @param {(Array|Object)} collection - object or array to get values from
 * @returns {Array} array of collection values, empty if not collection
 *
 * @example
 * values({ a: 123 }) // => [123]
 *
 * @example
 * values([1, 2, 3]) // => [1, 2, 3]
 *
 * @since 0.2.0
 */
function values (collection) {
  if (typeof collection !== 'object' || collection === null) {
    return []
  }
  return Object.values(collection)
}

module.exports = values
