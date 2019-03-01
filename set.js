var curry3 = require('./internal/curry3')
var get = require('./get')
var clone = require('./clone')
var slice = require('./slice')
var split = require('./split')
var isObject = require('./isObject')

/**
 * Set path of object to value returning the copy
 *
 * @param {(Array|string)} path - path to set
 * @param {*} value - value to set at path
 * @param {Object} object - object to set value in
 * @returns {Object} Returns copy of `object` with `value` set at `path`
 *
 * @example
 * set('a.b', 2, { a: { b: 1 } }) // => { a: { b: 2 } }
 *
 * @since 0.2.0
 */
function set (path, value, object) {
  if (!isObject(object)) {
    return object
  }
  var res = clone(object)
  var ptr = res
  var keys = Array.isArray(path) ? path : split('.', path)
  for (var i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      ptr[keys[i]] = value
    } else {
      var keySoFar = slice(0, i + 1, keys)
      ptr[keys[i]] = clone(get(keySoFar, object))
      ptr = ptr[keys[i]]
    }
  }
  return res
}

module.exports = curry3(set)
