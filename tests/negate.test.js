/* global describe, expect, test */

const _ = require('../lya')

describe('negate', () => {
  test('negates 0 arity functions', () => {
    const trueFunction = () => true
    const negativeFunction = _.negate(trueFunction)
    expect(negativeFunction()).toBe(false)
  })
  test('negates 1 arity functions', () => {
    const fun = (isFun) => isFun
    const negativeFunction = _.negate(fun)
    expect(negativeFunction(true)).toBe(false)
    expect(negativeFunction(false)).toBe(true)
  })
  test('negates 2 arity functions', () => {
    const fun = (doesNotMatter, isFun) => isFun
    const negativeFunction = _.negate(fun)
    expect(negativeFunction('ignore', true)).toBe(false)
    expect(negativeFunction('ignore', false)).toBe(true)
  })
})
