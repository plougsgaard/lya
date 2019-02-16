const curry2 = require('./internal/curry2')
const iteratee = require('./internal/iteratee')

function mapValues (keyOrFunction, object) {
  let result = {}

  for (let key of Object.keys(object)) {
    result[key] = iteratee(keyOrFunction)(object[key])
  }

  return result
}

module.exports = curry2(mapValues)
