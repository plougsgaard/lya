const curry2 = require('./internal/curry2')
const iteratee = require('./internal/iteratee')

function map (keyOrFunction, array) {
  let idx = -1
  const length = Array.isArray(array) ? array.length : 0
  let result = new Array(length)

  while (++idx < length) {
    result[idx] = iteratee(keyOrFunction)(array[idx], idx, array)
  }

  return result
}

module.exports = curry2(map)
