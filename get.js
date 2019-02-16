const curry2 = require('./internal/curry2')
const split = require('./split')
const reduce = require('./reduce')

/**
 * Grab path in collection.
 * @param {(string|string[])} path
 * @param {(Object|Array)} [collection]
 *
 * @example
 *
 * get('a.b.c')
 * get(['a', 'b', 'c'])
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
