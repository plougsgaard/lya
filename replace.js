var curry3 = require('./internal/curry3')

/**
 * Replace some or all matches with replacement pattern.
 *
 * @param {RegExp|string} regexp - regular expression string or RegExp literal
 * @param {*} replacement - replacement pattern
 * @param {*} string - string to perform replacement in
 * @returns {string} String with regexp performed
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *
 * @example
 * replace(/a/i, 'b', 'a-a-a') // => 'b-a-a'
 *
 * @example
 * replace(/a/gi, 'b', 'a-a-a') // => 'b-b-b'
 *
 * @since 0.4.0
 */
function replace (regexp, replacement, string) {
  if (typeof string !== 'string') {
    return string
  }
  return string.replace(regexp, replacement)
}

module.exports = curry3(replace)
