/**
 * Reverses list.
 *
 * @param {(Array)} collection - array to reverse
 * @returns {Array} Returns reversed array
 *
 * @example
 * reverse([1, 2]) // => [2, 1]
 *
 * @since 0.6.0
 */
function reverse (collection) {
  if (!Array.isArray(collection)) {
    return []
  }
  var result = []
  for (var i = collection.length - 1; i >= 0; i--) {
    result.push(collection[i])
  }
  return result
}

module.exports = reverse
