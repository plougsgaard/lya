var curry2 = require('./internal/curry2')
var clone = require('./clone')
var keys = require('./keys')

/**
 * Assign keys from left to right.
 *
 * @param {Object} fromCollection - Source collection
 * @param {Object} toCollection - Target collection
 * @returns {Object} Target collection with keys from source overwritten.
 *
 * @example
 * assign({ a: 1 }, { a: 4, b: 2 }) // => { a: 1, b: 2 }
 *
 * @since 0.2.0
 */
function assign (fromCollection, toCollection) {
  var result = {}
  if (typeof toCollection === 'object' && toCollection !== null) {
    result = clone(toCollection)
  }
  var fromCollectionKeys = keys(fromCollection)
  for (var index in fromCollectionKeys) {
    result[fromCollectionKeys[index]] = fromCollection[fromCollectionKeys[index]]
  }
  return result
}

module.exports = curry2(assign)
