var curry4 = require("./internal/curry4")

function branch (test, left, right, value) {
  return test(value) ? left : right
}

module.exports = curry4(branch)
