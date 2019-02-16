const curry2 = require('./internal/curry2')

/**
 * Split string into array by delimeter.
 * @param {string} delimeter
 * @param {string} string
 */
function split (delimeter, string) {
  return (string || '').split(delimeter)
}

module.exports = curry2(split)
