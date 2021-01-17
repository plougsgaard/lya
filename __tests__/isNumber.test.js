/* global describe, expect, test */

const _ = require('../lya')

describe('isNumber', () => {
  test('values', () => {
    expect(_.isNumber('')).toBe(false)
    expect(_.isNumber('foo')).toBe(false)
    expect(_.isNumber(123)).toBe(true)
    expect(_.isNumber(new Number(123))).toBe(true)
    expect(_.isNumber(Number(123))).toBe(true)
    expect(_.isNumber(NaN)).toBe(false)
    expect(_.isNumber(+NaN)).toBe(false)
    expect(_.isNumber(-NaN)).toBe(false)
  })
})
