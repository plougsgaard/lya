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
  if (typeof Object.values === 'function') {
    return Object.values(collection)
  } else {
    var result = []
    for (var key in collection) {
      if (collection.propertyIsEnumerable(key) && collection.hasOwnProperty(key)) {
        result.push(collection[key])
      }
    }
    return result
  }
}

module.exports = values
