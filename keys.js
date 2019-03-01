/**
 * Get keys of collection.
 *
 * @param {(Array|Object)} collection - object or array to get keys from
 * @returns {Array} Returns array of `collection` keys
 *
 * @example
 * keys({ a: 123 }) // => ['a']
 *
 * @example
 * keys([1, 2, 3]) // => ['0', '1', '2']
 *
 * @since 0.2.0
 */
function keys (collection) {
  if (typeof collection !== 'object' || collection === null) {
    return []
  }
  return Object.keys(collection)
}

module.exports = keys
