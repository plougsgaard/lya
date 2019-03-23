/* global describe, expect, test */

const _ = require('../lya')

describe('startsWith', () => {
  test('strings', () => {
    expect(_.startsWith('abc', 'abcdef')).toBe(true)
    expect(_.startsWith('def', 'abcdef')).toBe(false)
  })
  test('non-strings', () => {
    expect(_.startsWith([], 'abc')).toBe(false)
    expect(_.startsWith(undefined, 'abc')).toBe(false)
    expect(_.startsWith(null, 'abc')).toBe(false)
    expect(_.startsWith(() => 123, 'abc')).toBe(false)
    expect(_.startsWith(NaN, 'abc')).toBe(false)
  })
})
