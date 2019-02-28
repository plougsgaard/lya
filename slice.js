var curry3 = require('./internal/curry3')

/**
 * Slice array densely.
 *
 * @param {number} start
 * @param {number} end
 * @param {Array} array
 * @returns {Array} densely sliced array
 *
 * @see https://github.com/lodash/lodash/blob/master/slice.js
 *
 * @example
 * slice(0, 0, [1, 2, 3]) // => []
 *
 * @example
 * slice(0)(0)([1, 2, 3]) // => []
 *
 * @example
 * slice(0, -1, [1, 2, 3]) // => [1, 2]
 *
 * @since 0.1.0
 */
function slice (start, end, array) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  var index = -1
  var result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

module.exports = curry3(slice)
