const curry2 = require('./internal/curry2')
const clone = require('./clone')
const keys = require('./keys')

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
  for (var k of keys(fromCollection)) {
    result[k] = fromCollection[k]
  }
  return result
}

module.exports = curry2(assign)
