const curry2 = require('./internal/curry2')
const split = require('./split')
const reduce = require('./reduce')

/**
 * Gets value from (nested) path in a collection.
 *
 * @param {(string|string[])} path
 * @param {(Object|Array)} [collection]
 * @returns {*} value if found, `undefined` otherwise
 *
 * @example
 * get('a.b', { a: { b: 42 } }) // => 42
 *
 * @example
 * get(['a', 'b'], { a: { b: 42 } }) // => 42
 *
 * @example
 * get('a.1', { a: [1, 2] }) // => 2
 */
function get (path, collection) {
  let p = path
  if (typeof p === 'string') {
    p = split('.', p)
  }
  if (!Array.isArray(p)) {
    return undefined
  }
  return reduce((acc, key) => (
    acc && acc[key]
  ), collection, p)
}

module.exports = curry2(get)
