/* global describe, expect, test */

const _ = require('../lya')

describe('first', () => {
  test('getting first values', () => {
    expect(_.first(['a'])).toBe('a')
    expect(_.first([5])).toBe(5)
    expect(_.first([5, 6, 7])).toBe(5)
    expect(_.first([])).toBe(undefined)
    expect(_.first(null)).toBe(undefined)
    expect(_.first(NaN)).toBe(undefined)
    expect(_.first(0)).toBe(undefined)
    expect(_.first('foo')).toBe(undefined)
  })
})
