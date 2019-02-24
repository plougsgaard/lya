const curry3 = require('./internal/curry3')
const get = require('./get')
const clone = require('./clone')
const slice = require('./slice')
const split = require('./split')
const isObject = require('./isObject')

/**
 * Set value of object at some path, returning a copy with that value.
 *
 * @param {(Array|string)} path - key/path to set
 * @param {*} value - value
 * @param {Object} object - collection to set value in
 * @returns {Object} new collection with value
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
