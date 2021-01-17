function objectTag (value) {
  return Object.prototype.toString.call(value)
}

module.exports = objectTag