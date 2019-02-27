/* global describe, expect, test */

const _ = require('../lya')

describe('nth', () => {
  test('getting values at indices', () => {
    expect(_.nth(0, ['a'])).toBe('a')
    expect(_.nth(0, [5])).toBe(5)
    expect(_.nth(0, [5, 6, 7])).toBe(5)
    expect(_.nth(-1, [5])).toBe(5)
    expect(_.nth(-1, [5, 6, 7])).toBe(7)
    expect(_.nth(1, [5])).toBe(undefined)
  })
})
