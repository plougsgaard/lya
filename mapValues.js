const curry2 = require('./internal/curry2')
const makeIteratee = require('./internal/iteratee')

/**
 * Map over object calling iteratee on each value.
 *
 * @param {String|Function} iteratee
 * @param {Object} object
 * @returns {Object}
 *
 * @example
 * mapValues(x => x + 1, { a: 10, b: 10 }) // => { a: 11, b: 11 }
 *
 * @since 0.1.0
 */
function mapValues (iteratee, object) {
  let result = {}

  iteratee = makeIteratee(iteratee)
  for (let key of Object.keys(object)) {
    result[key] = iteratee(object[key])
  }

  return result
}

module.exports = curry2(mapValues)
