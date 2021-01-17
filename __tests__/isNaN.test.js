/* global describe, expect, test */

const _ = require('../lya')

describe('isNaN', () => {
  test('values', () => {
    expect(_.isNaN('')).toBe(false)
    expect(_.isNaN('foo')).toBe(false)
    expect(_.isNaN(123)).toBe(false)
    expect(_.isNaN(new Number(123))).toBe(false)
    expect(_.isNaN(NaN)).toBe(true)
  })
})
