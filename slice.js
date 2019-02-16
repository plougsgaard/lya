const curry3 = require('./internal/curry3')

/**
 * Slice array densely.
 *
 * Copied (more or less) from the lodash implementation
 *
 * @see https://github.com/lodash/lodash/blob/master/slice.js
 *
 * @param {number} start
 * @param {number} end
 * @param {Array} array
 */
function slice (start, end, array) {
  let length = array == null ? 0 : array.length
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

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

module.exports = curry3(slice)
