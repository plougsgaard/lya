/**
 * Trim string by removing whitespace from left and right.
 *
 * @param {string} string - string to trim
 * @returns {string} String with whitespace removed from left and right
 *
 * @see https://mdn.io/trim
 *
 * @example
 * trim(' a ') // => 'a'
 *
 * @since 0.4.0
 */
function trim (string) {
  if (typeof string !== 'string') {
    return string
  }
  return string.trim()
}

module.exports = trim
