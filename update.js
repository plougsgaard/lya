var curry3 = require('./internal/curry3')
var get = require('./get')
var clone = require('./clone')
var slice = require('./slice')
var split = require('./split')
var isObject = require('./isObject')

/**
 * Update path of object to result of update function on existing value returning the copy
 *
 * @param {(Array|string)} path - path to update
 * @param {Function|*} predicate - function or value to apply at path
 * @param {Object} object - object to update path in
 * @returns {Object} Returns copy of `object` with `predicate` applied at `path`
 *
 * @example
 * update('a.b', v => v + 10, { a: { b: 1 } }) // => { a: { b: 10 } }
 *
 * @example
 * update('a.c', v => 10, { a: { b: 1 } }) // => { a: { b: 1, c: 10 } }
 *
 * @since 0.5.0
 */
function update (path, predicate, object) {
  if (!isObject(object)) {
    return object
  }
  var res = clone(object)
  var ptr = res
  var keys = Array.isArray(path) ? path : split('.', path)
  for (var i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      if (typeof predicate !== 'function') {
        ptr[keys[i]] = predicate
      } else {
        ptr[keys[i]] = predicate(ptr[keys[i]])
      }
    } else {
      var keySoFar = slice(0, i + 1, keys)
      ptr[keys[i]] = clone(get(keySoFar, object))
      ptr = ptr[keys[i]]
    }
  }
  return res
}

module.exports = curry3(update)
