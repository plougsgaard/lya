var curry2 = require('./internal/curry2')
var keys = require('./keys')

/**
 * Check whether collection includes some `value`.
 *
 * @param {*} value - value to find
 * @param {Array|Object} collection - array or object to search for value in
 * @returns {boolean} Returns `true` if collection includes value
 *
 * @example
 * includes(1, [1, 2]) // => true
 *
 * @example
 * includes(1, { a: 1, b: 2 }) // => true
 *
 * @since 0.4.0
 */
function includes (value, collection) {
  if (!collection) {
    return false
  }
  if (Array.isArray(collection)) {
    return collection.indexOf(value) !== -1
  }
  var collectionKeys = keys(collection)
  for (var index in collectionKeys) {
    if (collection[collectionKeys[index]] === value) {
      return true
    }
  }
  return false
}

module.exports = curry2(includes)
