var curry2 = require('./internal/curry2')
var split = require('./split')
var reduce = require('./reduce')
var isNumber = require('./isNumber')

/**
 * Gets value from (nested) path in a collection.
 *
 * @param {(string|string[])} path - dot-string or string-array denoting path
 * @param {(Object|Array)} collection - collection to get value from
 * @returns {*} Returns value if found, `undefined` otherwise
 *
 * @example
 * get('a.b', { a: { b: 42 } }) // => 42
 *
 * @example
 * get(['a', 'b'], { a: { b: 42 } }) // => 42
 *
 * @example
 * get('a.1', { a: [1, 2] }) // => 2
 *
 * @since 0.1.0
 */
function get (path, collection) {
  if (typeof path === 'string') {
    path = split('.', path)
  }
  if (isNumber(path)) {
    path = [path]
  }
  if (!Array.isArray(path)) {
    return undefined
  }
  return reduce(
    function (acc, key) {
      return acc && acc[key]
    },
    collection,
    path
  )
}

module.exports = curry2(get)
