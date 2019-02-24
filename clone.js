const keys = require('./keys')

/**
 * Clone (shallow) collection.
 *
 * @param {Object} collection - Collection to clone
 * @returns {Object} shallow clone of collection
 *
 * @example
 * let obj = { a: 1 }
 * let c = clone(obj) // => c = { a: 1 }, obj != c
 *
 * @since 0.2.0
 */
function clone (collection) {
  let result = {}
  for (var k of keys(collection)) {
    result[k] = collection[k]
  }
  return result
}

module.exports = clone
