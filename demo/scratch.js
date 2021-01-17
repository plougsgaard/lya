import _ from '../lya.js'

const a = [1, 3, 4, 6, 9]

const result = _.flow(
  _.map(v => v + 1),
  _.get(0),
  _.branch(_.isNumber, true, false),
  a
)

console.log(typeof result, result)