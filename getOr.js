var curry3 = require('./internal/curry3')
var get = require('./get')
/**
 * Gets value from (nested) path in a collection, falls back on default value.
 *
 * @param {*} defaultValue - value to return if nothing found at `path`
 * @param {(string|string[])} path - dot-string or string-array denoting path
 * @param {(Object|Array)} collection - collection to get value from
 * @returns {*} Returns value if found, `defaultValue` otherwise
 *
 * @example
 * getOr('foo', 'a.b', { a: { b: 42 } }) // => 42
 *
 * @example
 * getOr('foo', 'a.z', { a: { b: 42 } }) // => foo
 *
 * @example
 * getOr('foo', 'a.b', { a: { b: undefined } }) // => foo
 *
 * @example
 * getOr('foo', ['a', 'b'], { a: { b: 42 } }) // => 42
 *
 * @example
 * getOr('foo', 'a.1', { a: [1, 2] }) // => 2
 *
 * @since 0.6.0
 */
function getOr (defaultValue, path, collection) {
  var result = get(path, collection)
  return result === undefined ? defaultValue : result
}

module.exports = curry3(getOr)
