const keys = require('./keys')
const slice = require('./slice')

/**
 * Clone (shallow) collection.
 *
 * @param {Object|Array} collection - Collection to clone
 * @returns {Object|Array} shallow clone of collection
 *
 * @example
 * let obj = { a: 1 }
 * let res = clone(obj) // => res = { a: 1 }, obj != res
 *
 * @example
 * let arr = [1, 2, 3]
 * let res = clone(arr) // => res = [1, 2, 3], obj != res
 *
 * @since 0.2.0 - array clones introduced in 0.3.0
 */
function clone (collection) {
  if (Array.isArray(collection)) {
    return slice(0, undefined, collection)
  }
  var result = {}
  for (var k of keys(collection)) {
    result[k] = collection[k]
  }
  return result
}

module.exports = clone
