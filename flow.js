const slice = require('./slice')

function threadValue (fns, initial) {
  let idx = -1
  let result = initial
  if (Array.isArray(fns[0])) {
    fns = fns[0]
  }
  while (++idx < fns.length) {
    result = fns[idx](result)
  }
  return result
}

function threadValueCurried (fns) {
  return function (initial) {
    return threadValue(fns, initial)
  }
}

function flow () {
  const last = arguments[arguments.length - 1]
  if (typeof last === 'function' || arguments.length === 1) {
    return threadValueCurried(arguments)
  } else {
    return threadValue(slice(0, -1, arguments), last)
  }
}

module.exports = flow
