const curry3 = require('./internal/curry3')

function reduce (iteratee, accumulator, array) {
  let idx = -1
  const length = Array.isArray(array) ? array.length : 0

  while (++idx < length) {
    accumulator = iteratee(accumulator, array[idx], idx, array)
  }

  return accumulator
}

module.exports = curry3(reduce)
