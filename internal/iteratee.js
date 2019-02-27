var get = require('../get')
var identity = require('../identity')

function iteratee (keyOrFunction) {
  if (typeof keyOrFunction === 'function') {
    return keyOrFunction
  } else if (typeof keyOrFunction === 'string' || Array.isArray(keyOrFunction)) {
    return get(keyOrFunction)
  } else {
    return identity
  }
}

module.exports = iteratee
