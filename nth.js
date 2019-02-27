var curry2 = require('./internal/curry2')

/**
 * Get nth element in array.
 * If index is negative, it gets the nth last element.
 *
 * @param {integer} index - index in array to grab
 * @param {*} array - to grab value from
 * @returns {*} Value at nth index starting from 0
 *
 * @example
 * nth(1, [6, 7, 8]) // => 7
 *
 * @example
 * nth(5, [6, 7, 8]) // => undefined
 *
 * @example
 * nth(-1, [6, 7, 8]) // => 8
 *
 * @since 0.3.0
 */
function nth (index, array) {
  if (!Array.isArray(array)) {
    return undefined
  } else {
    if (index < 0) {
      return array[array.length + index]
    } else {
      return array[index]
    }
  }
}

module.exports = curry2(nth)
