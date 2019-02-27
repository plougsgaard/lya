/* global describe, expect, test */

const _ = require('../lya')

describe('last', () => {
  test('getting last values', () => {
    expect(_.last(['a'])).toBe('a')
    expect(_.last([5])).toBe(5)
    expect(_.last([5, 6, 7])).toBe(7)
    expect(_.last([])).toBe(undefined)
    expect(_.last(null)).toBe(undefined)
    expect(_.last(NaN)).toBe(undefined)
    expect(_.last(0)).toBe(undefined)
    expect(_.last('foo')).toBe(undefined)
  })
})
