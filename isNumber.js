var isNaN = require('./isNaN')
var objectTag = require('./internal/objectTag')

function isNumber (value) {
  return objectTag(value) === '[object Number]' && !isNaN(value)
}

module.exports = isNumber
