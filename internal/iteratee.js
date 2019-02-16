const get = require('../get')

function iteratee (keyOrFunction) {
  if (typeof keyOrFunction === 'function') {
    return keyOrFunction
  } else {
    return get(keyOrFunction)
  }
}

module.exports = iteratee
